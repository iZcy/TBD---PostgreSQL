const tables = require("../../config/tables");
const db = require("../../config/connectDb");

const getAllBooks = async () =>
  new Promise((resolve, reject) => {
    db.query(`SELECT * FROM ${tables.book.table}`, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });

const getBookById = async (id) =>
  new Promise((resolve, reject) => {
    db.query(
      // custom limit
      `SELECT * FROM ${tables.book.table} WHERE ${tables.book.primary} = $1 LIMIT 1`,
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
  getAllBooks,
  getBookById
};
