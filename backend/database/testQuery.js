const db = require("../config/connectDb");

const getAllTransactions = async () =>
  new Promise((resolve, reject) => {
    db.query(`SELECT * FROM public."TRANSACTION"`, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });

module.exports = { getAllTransactions };
