const profileQuery = require("../../database/public/profileQuery");

const getAllProfiles = async (req, res) => {
  try {
    const data = await profileQuery.getAllProfiles();
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

const getProfileById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await profileQuery.getProfileById(id);
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
  getAllProfiles,
  getProfileById
};
