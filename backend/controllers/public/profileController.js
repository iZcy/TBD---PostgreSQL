const profileQuery = require("../../database/public/profileQuery");

const getAllProfiles = async (req, res, next) => {
  try {
    const data = await profileQuery.getAllProfiles();
    if (data.rowCount === 0) {
      res.status(404);
      throw new Error("Data not found");
    }
    return res.status(200).json({ data: data.rows });
  } catch (err) {
    next(err);
  }
};

const getProfileById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = await profileQuery.getProfileById(id);
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
  getAllProfiles,
  getProfileById
};
