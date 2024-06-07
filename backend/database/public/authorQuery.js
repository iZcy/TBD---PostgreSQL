const tables = require("../../config/tables");
const db = require("../../config/connectDb");

const getAllAuthors = async () =>
  new Promise((resolve, reject) => {
    db.query(`SELECT * FROM ${tables.author.table}`, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });

const getAuthorById = async (id) =>
  new Promise((resolve, reject) => {
    db.query(
      // custom limit
      `SELECT * FROM ${tables.author.table} WHERE ${tables.author.primary} = $1 LIMIT 1`,
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
  getAllAuthors,
  getAuthorById
};
