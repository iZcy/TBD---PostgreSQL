const authorQuery = require("../../database/public/authorQuery");

const getAllAuthors = async (req, res, next) => {
  try {
    let data;

    data = await authorQuery.getAllAuthors();

    if (!data || data.length === 0) {
      res.status(404);
      throw new Error("Entah mengapa, data tidak ditemukan");
    }

    return res.status(200).json({ data: data.rows });
  } catch (err) {
    next(err);
  }
};

const getAuthorById = async (req, res, next) => {
  try {
    const id = req.params.id;
    let data;

    data = await authorQuery.getAuthorById(id);

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
  getAllAuthors,
  getAuthorById
};
