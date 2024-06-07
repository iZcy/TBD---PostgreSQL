const franchiseQuery = require("../../database/public/franchiseQuery");

const getAllFranchises = async (req, res, next) => {
  try {
    const data = await franchiseQuery.getAllFranchises();
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

const getFranchiseById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = await franchiseQuery.getFranchiseById(id);
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
  getAllFranchises,
  getFranchiseById
};
