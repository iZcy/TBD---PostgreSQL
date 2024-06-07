const writtingsQuery = require("../../database/public/writtingsQuery");

const getAllWrittings = async (req, res, next) => {
  try {
    let data;

    data = await writtingsQuery.getAllWrittings();

    if (data.rowCount === 0) {
      res.status(404);
      throw new Error("Data not found!");
    }

    return res.status(200).json({ data: data.rows });
  } catch (err) {
    next(err);
  }
};

const getWrittingById = async (req, res, next) => {
  try {
    const id = req.params.id;
    let data;

    data = await writtingsQuery.getWrittingById(id);

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
  getAllWrittings,
  getWrittingById
};
