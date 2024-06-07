const viewQuery = require("../database/viewsQuery");

const getTransactionView = async (req, res) => {
  try {
    const data = await viewQuery.getTransactionView();
    if (!data || data.length === 0) {
      res.status(404);
      throw new Error("Data not found");
    }
    return res.status(200).json({ data: data.rows });
  } catch (err) {
    res.status(500);
    throw new Error(err.message);
  }
};

const getStaffView = async (req, res) => {
  try {
    const data = await viewQuery.getStaffView();
    if (!data || data.length === 0) {
      res.status(404);
      throw new Error("Data not found");
    }
    return res.status(200).json({ data: data.rows });
  } catch (err) {
    res.status(500);
    throw new Error(err.message);
  }
};

module.exports = {
  getTransactionView,
  getStaffView
};
