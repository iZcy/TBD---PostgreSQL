const bigDbQuery = require("../../database/package/bigDbQuery");

const getAllDbWithFilter = async (req, res, next) => {
  try {
    // parse filters
    const filter = req.body;

    // check filters
    if (!filter) {
      res.status(400);
      throw new Error("Filter is null");
    }

    let data;

    data = await bigDbQuery.getAllDbWithFilter();

    if (data.rowCount === 0) {
      res.status(404);
      throw new Error("Entah mengapa, data tidak ditemukan");
    }

    return res.status(200).json({ data: data.rows });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllDbWithFilter
};
