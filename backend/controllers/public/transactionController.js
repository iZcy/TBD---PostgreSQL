const transactionQuery = require("../../database/public/transactionQuery");

const getAllTransactions = async (req, res, next) => {
  try {
    let data;

    data = await transactionQuery.getAllTransactions();

    if (!data || data.length === 0) {
      res.status(404);
      throw new Error("Entah mengapa, data tidak ditemukan");
    }

    return res.status(200).json({ data: data.rows });
  } catch (err) {
    next(err);
  }
};

const getTransactionById = async (req, res, next) => {
  try {
    const id = req.params.id;
    let data;

    data = await transactionQuery.getTransactionById(id);

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
  getAllTransactions,
  getTransactionById
};
