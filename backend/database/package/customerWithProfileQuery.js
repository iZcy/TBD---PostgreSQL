const tables = require("../../config/tables");
const db = require("../../config/connectDb");

const getCustomerWithProfile = async () =>
  new Promise((resolve, reject) => {
    db.query(
      `SELECT * FROM ${tables.customer.table} AS customer_table JOIN ${tables.profile.table} AS profile_table ON customer_table._profile = profile_table.${tables.profile.primary}`,
      (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      }
    );
  });

module.exports = { getCustomerWithProfile };
