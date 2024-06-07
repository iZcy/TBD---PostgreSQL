const tables = require("../../config/tables");
const db = require("../../config/connectDb");

const getAllLocations = async () =>
  new Promise((resolve, reject) => {
    db.query(`SELECT * FROM ${tables.location.table}`, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });

const getLocationById = async (id) =>
  new Promise((resolve, reject) => {
    db.query(
      // custom limit
      `SELECT * FROM ${tables.location.table} WHERE ${tables.location.primary} = $1 LIMIT 1`,
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
  getAllLocations,
  getLocationById
};
