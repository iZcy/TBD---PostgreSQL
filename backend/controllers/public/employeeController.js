const employeeQuery = require("../../database/public/employeeQuery");

const getAllEmployees = async (req, res, next) => {
  try {
    let data;

    data = await employeeQuery.getAllEmployees();

    if (data.rowCount === 0) {
      res.status(404);
      throw new Error("Data not found!");
    }

    return res.status(200).json({ data: data.rows });
  } catch (err) {
    next(err);
  }
};

const getEmployeeById = async (req, res, next) => {
  try {
    const id = req.params.id;
    let data;

    data = await employeeQuery.getEmployeeById(id);

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
  getAllEmployees,
  getEmployeeById
};
