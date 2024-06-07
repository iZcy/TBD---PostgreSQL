const tables = require("../../config/tables");
const db = require("../../config/connectDb");

const getAllStocks = async () =>
  new Promise((resolve, reject) => {
    db.query(`SELECT * FROM ${tables.stock.table}`, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });

const getStockById = async (id) =>
  new Promise((resolve, reject) => {
    db.query(
      // custom limit
      `SELECT * FROM ${tables.stock.table} WHERE ${tables.stock.primary} = $1 LIMIT 1`,
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
  getAllStocks,
  getStockById
};
