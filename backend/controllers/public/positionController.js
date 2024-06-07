const positionQueries = require("../../database/public/positionQuery");

const getAllPositions = async (req, res, next) => {
  try {
    const data = await positionQueries.getAllPositions();
    if (data.rowCount === 0) {
      res.status(404);
      throw new Error("Data not found");
    }
    return res.status(200).json({ data: data.rows });
  } catch (err) {
    next(err);
  }
};

const getPositionById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = await positionQueries.getPositionById(id);
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
  getAllPositions,
  getPositionById
};
