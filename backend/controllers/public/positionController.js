const positionQueries = require("../../database/public/positionQuery");

const getAllPositions = async (req, res) => {
  try {
    const data = await positionQueries.getAllPositions();
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

const getPositionById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await positionQueries.getPositionById(id);
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
  getAllPositions,
  getPositionById
};
