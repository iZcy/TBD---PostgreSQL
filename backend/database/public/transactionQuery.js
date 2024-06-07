const tables = require("../../config/tables");
const db = require("../../config/connectDb");

const getAllTransactions = async () =>
  new Promise((resolve, reject) => {
    db.query(`SELECT * FROM ${tables.transaction.table}`, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });

const getTransactionById = async (id) =>
  new Promise((resolve, reject) => {
    db.query(
      // custom limit
      `SELECT * FROM ${tables.transaction.table} WHERE ${tables.transaction.primary} = $1 LIMIT 1`,
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
  getAllTransactions,
  getTransactionById
};
