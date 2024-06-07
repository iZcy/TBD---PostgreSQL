// const tables = require("../../config/tables");
// const db = require("../../config/connectDb");

// const turnWishlistToBuy = async (customerId, bookId) =>
//   // Insert the book into the transaction table first
//   new Promise((resolve, reject) => {
//     db.query("BEGIN", (err) => {
//       if (err) {
//         return reject(err);
//       } else {
//         // Get a random stock where the book is available with the criteria of the franchise has at least 1 employee
//         let stockId;
//         let employeeId;

//         db.query(
//           `SELECT stock_table.stock_key, franchise_table._employee FROM ${tables.stock.table} AS stock_table JOIN ${tables.franchise.table} AS franchise_table ON stock_table._franchise = franchise_table.${tables.franchise.primary} WHERE stock_table._book = $1 AND stock_table._franchise IN (SELECT _franchise FROM ${tables.employee.table} GROUP BY _franchise HAVING COUNT(*) > 0) ORDER BY RANDOM() LIMIT 1;`,
//           [bookId],
//           (err, results) => {
//             if (err) {
//               return db.query("ROLLBACK", () => {
//                 reject(err);
//               });
//             } else {
//               if (results.rows.length === 0) {
//                 return db.query("ROLLBACK", () => {
//                   reject(new Error("No stock available"));
//                 });
//               } else {
//                 stockId = results.rows[0]._stock;
//                 employeeId = results.rows[0]._employee;
//               }
//             }
//           }
//         );

//         // Insert the transaction
//         db.query(
//           `INSERT INTO ${tables.transaction.table} (_stock, _customer, _employee, "timestamp") VALUES ($1, $2, $3, $4)`,
//           [stockId, customerId, employeeId, new Date()],
//           (err) => {
//             if (err) {
//               return db.query("ROLLBACK", () => {
//                 reject(err);
//               });
//             } else {
//               // Delete the book from the wishlist table
//               db.query(
//                 `DELETE FROM ${tables.wishlist.table} WHERE _customer = $1 AND _book = $2`,
//                 [customerId, bookId],
//                 (err, results) => {
//                   if (err) {
//                     return db.query("ROLLBACK", () => {
//                       reject(err);
//                     });
//                   } else {
//                     db.query("COMMIT", (err) => {
//                       if (err) {
//                         return db.query("ROLLBACK", () => {
//                           reject(err);
//                         });
//                       } else {
//                         resolve(results);
//                       }
//                     });
//                   }
//                 }
//               );
//             }
//           }
//         );
//       }
//     });
//   });

// // CREATE TABLE IF NOT EXISTS public."TRANSACTION"
// // (
// //     _transaction_key uuid NOT NULL DEFAULT gen_random_uuid(),
// //     _stock uuid NOT NULL,
// //     _customer uuid NOT NULL,
// //     _discount uuid,
// //     _employee uuid NOT NULL,
// //     "timestamp" timestamp without time zone NOT NULL,
// //     PRIMARY KEY (_transaction_key)
// // );

// module.exports = { turnWishlistToBuy };
