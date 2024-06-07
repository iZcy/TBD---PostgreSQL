const tables = require("../../config/tables");
const db = require("../../config/connectDb");

const getAllPublishers = async () =>
  new Promise((resolve, reject) => {
    db.query(`SELECT * FROM ${tables.publisher.table}`, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });

const getPublisherById = async (id) =>
  new Promise((resolve, reject) => {
    db.query(
      // custom limit
      `SELECT * FROM ${tables.publisher.table} WHERE ${tables.publisher.primary} = $1 LIMIT 1`,
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
  getAllPublishers,
  getPublisherById
};
