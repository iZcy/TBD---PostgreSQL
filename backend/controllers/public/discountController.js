const discountQuery = require("../../database/public/discountQuery");

const getAllDiscounts = async (req, res) => {
  try {
    const data = await discountQuery.getAllDiscounts();
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

const getDiscountById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await discountQuery.getDiscountById(id);
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
  getAllDiscounts,
  getDiscountById
};
