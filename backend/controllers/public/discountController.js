const discountQuery = require("../../database/public/discountQuery");

const getAllDiscounts = async (req, res, next) => {
  try {
    const data = await discountQuery.getAllDiscounts();
    if (data.rowCount === 0) {
      res.status(404);
      throw new Error("Data not found");
    }
    return res.status(200).json({ data: data.rows });
  } catch (err) {
    next(err);
  }
};

const getDiscountById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = await discountQuery.getDiscountById(id);
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
  getAllDiscounts,
  getDiscountById
};
