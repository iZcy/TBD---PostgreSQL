const distributorQuery = require("../../database/public/distributorQuery");

const getAllDistributors = async (req, res, next) => {
  try {
    const data = await distributorQuery.getAllDistributors();
    if (data.rowCount === 0) {
      res.status(404);
      throw new Error("Data not found");
    }
    return res.status(200).json({
      data: data.rows
    });
  } catch (err) {
    next(err);
  }
};

const getDistributorById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = await distributorQuery.getDistributorById(id);
    if (data.rowCount === 0) {
      res.status(404);
      throw new Error("Data not found");
    }
    return res.status(200).json({
      data: data.rows
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllDistributors,
  getDistributorById
};
