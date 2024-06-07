const tables = require("../../config/tables");
const db = require("../../config/connectDb");

const getAllPositions = async () =>
  new Promise((resolve, reject) => {
    db.query(`SELECT * FROM ${tables.position.table}`, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });

const getPositionById = async (id) =>
  new Promise((resolve, reject) => {
    db.query(
      // custom limit
      `SELECT * FROM ${tables.position.table} WHERE ${tables.position.primary} = $1 LIMIT 1`,
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
  getAllPositions,
  getPositionById
};
