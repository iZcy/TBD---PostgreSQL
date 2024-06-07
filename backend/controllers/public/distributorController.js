const distributorQuery = require("../../database/public/distributorQuery");

const getAllDistributors = async (req, res) => {
  try {
    const data = await distributorQuery.getAllDistributors();
    if (!data || data.length === 0) {
      res.status(404);
      throw new Error("Data not found");
    }
    return res.status(200).json({
      data: data.rows
    });
  } catch (err) {
    res.status(500);
    throw new Error(err.message);
  }
};

const getDistributorById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await distributorQuery.getDistributorById(id);
    if (!data || data.length === 0) {
      res.status(404);
      throw new Error("Data not found");
    }
    return res.status(200).json({
      data: data.rows
    });
  } catch (err) {
    res.status(500);
    throw new Error(err.message);
  }
};

module.exports = {
  getAllDistributors,
  getDistributorById
};
