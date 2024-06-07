const writtingsQuery = require("../../database/public/writtingsQuery");

const getAllWrittings = async (req, res, next) => {
  try {
    let data;

    data = await writtingsQuery.getAllWrittings();

    if (!data || data.length === 0) {
      res.status(404);
      throw new Error("Entah mengapa, data tidak ditemukan");
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
  getAllWrittings,
  getWrittingById
};
