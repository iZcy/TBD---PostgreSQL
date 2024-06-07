const tables = require("../../config/tables");
const db = require("../../config/connectDb");

const getAllProfiles = async () =>
  new Promise((resolve, reject) => {
    db.query(`SELECT * FROM ${tables.profile.table}`, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });

const getProfileById = async (id) =>
  new Promise((resolve, reject) => {
    db.query(
      // custom limit
      `SELECT * FROM ${tables.profile.table} WHERE ${tables.profile.primary} = $1 LIMIT 1`,
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
  getAllProfiles,
  getProfileById
};
