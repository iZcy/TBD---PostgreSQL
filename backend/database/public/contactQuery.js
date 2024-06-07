const tables = require("../../config/tables");
const db = require("../../config/connectDb");

const getAllContacts = async () =>
  new Promise((resolve, reject) => {
    db.query(`SELECT * FROM ${tables.contact.table}`, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });

const getContactById = async (id) =>
  new Promise((resolve, reject) => {
    db.query(
      // custom limit
      `SELECT * FROM ${tables.contact.table} WHERE ${tables.contact.primary} = $1 LIMIT 1`,
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
  getAllContacts,
  getContactById
};
