const tables = require("../../config/tables");
const db = require("../../config/connectDb");

const makeBookAndWishlist = async (book, wishlist) => {
  return new Promise((resolve, reject) => {
    db.query("BEGIN", (err) => {
      if (err) {
        return reject(err);
      }

      db.query(
        `INSERT INTO ${tables.book.table} (_publisher, name, publication_year, pages, price) VALUES ($1, $2, $3, $4, $5) RETURNING ${tables.book.primary}`,
        [
          book._publisher,
          book.name,
          book.publication_year,
          book.pages,
          book.price
        ],
        (err, results) => {
          if (err) {
            return db.query("ROLLBACK", () => {
              reject(err);
            });
          }

          const bookKey = results.rows[0].book_key;

          db.query(
            `INSERT INTO ${tables.wishlist.table} (_customer, _book) VALUES ($1, $2)`,
            [wishlist._customer, bookKey],
            (err, results) => {
              if (err) {
                return db.query("ROLLBACK", () => {
                  reject(err);
                });
              }

              db.query("COMMIT", (err) => {
                if (err) {
                  return db.query("ROLLBACK", () => {
                    reject(err);
                  });
                }

                resolve(results);
              });
            }
          );
        }
      );
    });
  });
};

module.exports = { makeBookAndWishlist };
