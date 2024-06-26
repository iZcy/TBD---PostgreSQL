const queryTest = require("../../database/test/testQuery");

const testResponse = async (req, res) => {
  res.status(200).json({
    message: "Hello, World!"
  });
};

const testGetAllTransaction = async (req, res, next) => {
  try {
    let data;

    data = await queryTest.getAllTransactions();

    if (data.rowCount === 0) {
      res.status(404);
      throw new Error("Data not found!");
    }

    return res.status(200).json({ data: data.rows });
  } catch (err) {
    next(err);
  }
};

const testGetTransactionById = async (req, res, next) => {
  try {
    const id = req.params.id;
    let data;

    data = await queryTest.getTransactionById(id);

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
  testResponse,
  testGetAllTransaction,
  testGetTransactionById
};
