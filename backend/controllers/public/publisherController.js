const publisherQuery = require("../../database/public/publisherQuery");

const getAllPublishers = async (req, res, next) => {
  try {
    let data;

    data = await publisherQuery.getAllPublishers();

    if (data.rowCount === 0) {
      res.status(404);
      throw new Error("Data not found!");
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

    if (data.rowCount === 0) {
      res.status(404);
      throw new Error("Data not found!");
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
