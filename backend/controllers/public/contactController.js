const contactQuery = require("../../database/public/contactQuery");

const getAllContacts = async (req, res, next) => {
  try {
    let data;

    data = await contactQuery.getAllContacts();

    if (data.rowCount === 0) {
      res.status(404);
      throw new Error("Entah mengapa, data tidak ditemukan");
    }

    return res.status(200).json({ data: data.rows });
  } catch (err) {
    next(err);
  }
};

const getContactById = async (req, res, next) => {
  try {
    const id = req.params.id;
    let data;

    data = await contactQuery.getContactById(id);

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
  getAllContacts,
  getContactById
};
