const customerQuery = require("../../database/public/customerQuery");

const getAllCustomers = async (req, res, next) => {
  try {
    let data;

    data = await customerQuery.getAllCustomers();

    if (!data || data.length === 0) {
      res.status(404);
      throw new Error("Entah mengapa, data tidak ditemukan");
    }

    return res.status(200).json({ data: data.rows });
  } catch (err) {
    next(err);
  }
};

const getCustomerById = async (req, res, next) => {
  try {
    const id = req.params.id;
    let data;

    data = await customerQuery.getCustomerById(id);

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
  getAllCustomers,
  getCustomerById
};
