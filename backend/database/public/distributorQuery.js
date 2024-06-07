const tables = require("../../config/tables");
const db = require("../../config/connectDb");

const getAllDistributors = async () =>
  new Promise((resolve, reject) => {
    db.query(`SELECT * FROM ${tables.distributor.table}`, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });

const getDistributorById = async (id) =>
  new Promise((resolve, reject) => {
    db.query(
      // custom limit
      `SELECT * FROM ${tables.distributor.table} WHERE ${tables.distributor.primary} = $1 LIMIT 1`,
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
  getAllDistributors,
  getDistributorById
};
