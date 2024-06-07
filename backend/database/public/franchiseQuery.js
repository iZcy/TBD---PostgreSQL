const tables = require("../../config/tables");
const db = require("../../config/connectDb");

const getAllFranchises = async () =>
  new Promise((resolve, reject) => {
    db.query(`SELECT * FROM ${tables.franchise.table}`, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });

const getFranchiseById = async (id) =>
  new Promise((resolve, reject) => {
    db.query(
      // custom limit
      `SELECT * FROM ${tables.franchise.table} WHERE ${tables.franchise.primary} = $1 LIMIT 1`,
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
  getAllFranchises,
  getFranchiseById
};
