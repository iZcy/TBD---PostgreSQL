const authorQuery = require("../../database/public/authorQuery");

const getAllAuthors = async (req, res, next) => {
  try {
    let data;

    data = await authorQuery.getAllAuthors();

    if (data.rowCount === 0) {
      res.status(404);
      throw new Error("Data not found!");
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

    if (data.rowCount === 0) {
      res.status(404);
      throw new Error("Data not found!");
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
