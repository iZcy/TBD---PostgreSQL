const express = require("express");
const router = express.Router();

const employeeController = require("../../controllers/public/employeeController");

router.get("/", employeeController.getAllEmployees);
router.get("/:id", employeeController.getEmployeeById);

module.exports = router;
