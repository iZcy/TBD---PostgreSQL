const transactionQuery = require("../../database/public/transactionQuery");

const getAllTransactions = async (req, res, next) => {
  try {
    let data;

    data = await transactionQuery.getAllTransactions();

    if (data.rowCount === 0) {
      res.status(404);
      throw new Error("Data not found!");
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
  getAllTransactions,
  getTransactionById
};
