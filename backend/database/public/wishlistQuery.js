const tables = require("../../config/tables");
const db = require("../../config/connectDb");

const getAllWishlists = async () =>
  new Promise((resolve, reject) => {
    db.query(`SELECT * FROM ${tables.wishlist.table}`, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });

const getWishlistById = async (id) =>
  new Promise((resolve, reject) => {
    db.query(
      // custom limit
      `SELECT * FROM ${tables.wishlist.table} WHERE ${tables.wishlist.primary} = $1 LIMIT 1`,
      [id],
      (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      }
    );
  });

module.exports = {
  getAllWishlists,
  getWishlistById
};
