const customerWithProfileQuery = require("../../database/package/customerWithProfileQuery");

const getAllCustomersWithProfiles = async (req, res, next) => {
  try {
    let data;

    data = await customerWithProfileQuery.getCustomerWithProfile();

    if (data.rowCount === 0) {
      res.status(404);
      throw new Error("Data not found!");
    }

    return res.status(200).json({ data: data.rows });
  } catch (err) {
    next(err);
  }
};

module.exports = { getAllCustomersWithProfiles };
