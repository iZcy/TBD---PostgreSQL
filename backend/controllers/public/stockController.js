const stockQuery = require("../../database/public/stockQuery");

const getAllStocks = async (req, res, next) => {
  try {
    let data;

    data = await stockQuery.getAllStocks();

    if (!data || data.length === 0) {
      res.status(404);
      throw new Error("Entah mengapa, data tidak ditemukan");
    }

    return res.status(200).json({ data: data.rows });
  } catch (err) {
    next(err);
  }
};

const getStockById = async (req, res, next) => {
  try {
    const id = req.params.id;
    let data;

    data = await stockQuery.getStockById(id);

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
  getAllStocks,
  getStockById
};
