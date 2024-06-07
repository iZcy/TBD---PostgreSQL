const tables = require("../../config/tables");
const db = require("../../config/connectDb");

const getAllBooks = async () =>
  new Promise((resolve, reject) => {
    db.query(`SELECT * FROM ${tables.book.table}`, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });

const getBookById = async (id) =>
  new Promise((resolve, reject) => {
    db.query(
      // custom limit
      `SELECT * FROM ${tables.book.table} WHERE ${tables.book.primary} = $1 LIMIT 1`,
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

const checkBookSameDataExist = async (book) =>
  new Promise((resolve, reject) => {
    db.query(
      `SELECT * FROM ${tables.book.table} WHERE _publisher = $1 AND name = $2 AND publication_year = $3 AND pages = $4 AND price = $5`,
      [
        book._publisher,
        book.name,
        book.publication_year,
        book.pages,
        book.price
      ],
      (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      }
    );
  });

const updateBook = async (id, book) =>
  new Promise((resolve, reject) => {
    const updates = [];
    const values = [];

    if (book._publisher !== undefined) {
      updates.push("_publisher = $" + (updates.length + 1));
      values.push(book._publisher);
    }

    if (book.name !== undefined) {
      updates.push("name = $" + (updates.length + 1));
      values.push(book.name);
    }

    if (book.publication_year !== undefined) {
      updates.push("publication_year = $" + (updates.length + 1));
      values.push(book.publication_year);
    }

    if (book.pages !== undefined) {
      updates.push("pages = $" + (updates.length + 1));
      values.push(book.pages);
    }

    if (book.price !== undefined) {
      updates.push("price = $" + (updates.length + 1));
      values.push(book.price);
    }

    if (updates.length === 0) {
      return reject(new Error("No book fields provided for update."));
    }

    values.push(id);

    const query = `UPDATE ${tables.book.table} SET ${updates.join(", ")} WHERE ${tables.book.primary} = $${values.length}`;

    db.query(query, values, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });

const addBook = async (book) =>
  new Promise((resolve, reject) => {
    db.query(
      `INSERT INTO ${tables.book.table} (_publisher, name, publication_year, pages, price) VALUES ($1, $2, $3, $4, $5)`,
      [
        book._publisher,
        book.name,
        book.publication_year,
        book.pages,
        book.price
      ],
      (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      }
    );
  });

const deleteBook = async (id) =>
  new Promise((resolve, reject) => {
    db.query(
      `DELETE FROM ${tables.book.table} WHERE ${tables.book.primary} = $1`,
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

const findBook = async (filter) =>
  new Promise((resolve, reject) => {
    const { _publisher, name, publication_year, pages, price } = filter;
    const conditions = [];
    const values = [];

    if (_publisher) {
      conditions.push("_publisher = $" + (conditions.length + 1));
      values.push(_publisher);
    }

    if (name) {
      conditions.push("name = $" + (conditions.length + 1));
      values.push(name);
    }

    if (publication_year) {
      conditions.push("publication_year = $" + (conditions.length + 1));
      values.push(publication_year);
    }

    if (pages) {
      conditions.push("pages = $" + (conditions.length + 1));
      values.push(pages);
    }

    if (price) {
      conditions.push("price = $" + (conditions.length + 1));
      values.push(price);
    }

    const query = `SELECT * FROM ${tables.book.table} WHERE ${conditions.join(" AND ")}`;

    db.query(query, values, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });

module.exports = {
  getAllBooks,
  getBookById,
  updateBook,
  addBook,
  deleteBook,
  findBook,
  checkBookSameDataExist
};
