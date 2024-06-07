const locationQuery = require("../../database/public/locationQuery");

const getAllLocations = async (req, res) => {
  try {
    const data = await locationQuery.getAllLocations();
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

const getLocationById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await locationQuery.getLocationById(id);
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
  getAllLocations,
  getLocationById
};
