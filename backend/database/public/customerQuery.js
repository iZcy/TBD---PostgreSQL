const tables = require("../../config/tables");
const db = require("../../config/connectDb");

const getAllCustomers = async () =>
  new Promise((resolve, reject) => {
    db.query(`SELECT * FROM ${tables.customer.table}`, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });

const getCustomerById = async (id) =>
  new Promise((resolve, reject) => {
    db.query(
      // custom limit
      `SELECT * FROM ${tables.customer.table} WHERE ${tables.customer.primary} = $1 LIMIT 1`,
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
  getAllCustomers,
  getCustomerById
};
