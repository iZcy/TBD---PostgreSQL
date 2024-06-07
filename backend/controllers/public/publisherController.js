const publisherQuery = require("../../database/public/publisherQuery");

const getAllPublishers = async (req, res, next) => {
  try {
    let data;

    data = await publisherQuery.getAllPublishers();

    if (!data || data.length === 0) {
      res.status(404);
      throw new Error("Entah mengapa, data tidak ditemukan");
    }

    return res.status(200).json({ data: data.rows });
  } catch (err) {
    next(err);
  }
};

const getPublisherById = async (req, res, next) => {
  try {
    const id = req.params.id;
    let data;

    data = await publisherQuery.getPublisherById(id);

    if (!data || data.length === 0) {
      res.status(404);
      throw new Error("Entah mengapa, data tidak ditemukan");
    }

    return res.status(200).json({ data: data.rows });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllPublishers,
  getPublisherById
};