const tables = require("../../config/tables");
const db = require("../../config/connectDb");

const getAllWrittings = async () =>
  new Promise((resolve, reject) => {
    db.query(`SELECT * FROM ${tables.writtings.table}`, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });

const getWrittingById = async (id) =>
  new Promise((resolve, reject) => {
    db.query(
      // custom limit
      `SELECT * FROM ${tables.writtings.table} WHERE ${tables.writtings.primary} = $1 LIMIT 1`,
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
  getAllWrittings,
  getWrittingById
};
