const tables = require("../../config/tables");
const db = require("../../config/connectDb");

const getAllDiscounts = async () =>
  new Promise((resolve, reject) => {
    db.query(`SELECT * FROM ${tables.discount.table}`, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });

const getDiscountById = async (id) =>
  new Promise((resolve, reject) => {
    db.query(
      // custom limit
      `SELECT * FROM ${tables.discount.table} WHERE ${tables.discount.primary} = $1 LIMIT 1`,
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
  getAllDiscounts,
  getDiscountById
};
