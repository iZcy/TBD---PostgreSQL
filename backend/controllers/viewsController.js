const viewQuery = require("../database/viewsQuery");

const getTransactionView = async (req, res) => {
  try {
    const data = await viewQuery.getTransactionView();
    if (data.rowCount === 0) {
      res.status(404);
      throw new Error("Data not found");
    }
    return res.status(200).json({ data: data.rows });
  } catch (err) {
    next(err);
  }
};

const getStaffView = async (req, res) => {
  try {
    const data = await viewQuery.getStaffView();
    if (data.rowCount === 0) {
      res.status(404);
      throw new Error("Data not found");
    }
    return res.status(200).json({ data: data.rows });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getTransactionView,
  getStaffView
};
