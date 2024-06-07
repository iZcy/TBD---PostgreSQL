const bookQuery = require("../../database/public/bookQuery");

const getAllBooks = async (req, res, next) => {
  try {
    let data;

    data = await bookQuery.getAllBooks();

    if (!data || data.length === 0) {
      res.status(404);
      throw new Error("Entah mengapa, data tidak ditemukan");
    }

    return res.status(200).json({ data: data.rows });
  } catch (err) {
    next(err);
  }
};

const getBookById = async (req, res, next) => {
  try {
    const id = req.params.id;
    let data;

    data = await bookQuery.getBookById(id);

    if (!data || data.length === 0) {
      res.status(404);
      throw new Error("Entah mengapa, data tidak ditemukan");
    }

    return res.status(200).json({ data: data.rows });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllBooks,
  getBookById
};
