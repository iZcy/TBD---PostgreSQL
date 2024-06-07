const tables = require("../../config/tables");
const db = require("../../config/connectDb");

const getAllWishlists = async () =>
  new Promise((resolve, reject) => {
    db.query(`SELECT * FROM ${tables.wishlist.table}`, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });

const getWishlistById = async (id) =>
  new Promise((resolve, reject) => {
    db.query(
      `SELECT * FROM ${tables.wishlist.table} WHERE ${tables.wishlist.primary} = $1`,
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

const addWishlist = async (wishlist) =>
  new Promise((resolve, reject) => {
    db.query(
      `INSERT INTO ${tables.wishlist.table} (_customer, _book) VALUES ($1, $2)`,
      [wishlist._customer, wishlist._book],
      (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      }
    );
  });

const deleteWishlist = async (cutomerId, bookId) =>
  new Promise((resolve, reject) => {
    db.query(
      `DELETE FROM ${tables.wishlist.table} WHERE _customer = $1 AND _book = $2`,
      [cutomerId, bookId],
      (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      }
    );
  });

const checkWishlistExist = async (customerId, bookId) =>
  new Promise((resolve, reject) => {
    db.query(
      `SELECT * FROM ${tables.wishlist.table} WHERE _customer = $1 AND _book = $2`,
      [customerId, bookId],
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
  getAllWishlists,
  getWishlistById,
  addWishlist,
  deleteWishlist,
  checkWishlistExist
};
