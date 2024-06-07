const tables = require("../../config/tables");
const db = require("../../config/connectDb");

const getAllEmployees = async () =>
  new Promise((resolve, reject) => {
    db.query(`SELECT * FROM ${tables.employee.table}`, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });

const getEmployeeById = async (id) =>
  new Promise((resolve, reject) => {
    db.query(
      // custom limit
      `SELECT * FROM ${tables.employee.table} WHERE ${tables.employee.primary} = $1 LIMIT 1`,
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
  getAllEmployees,
  getEmployeeById
};
