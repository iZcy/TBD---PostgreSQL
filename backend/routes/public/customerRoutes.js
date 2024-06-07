const express = require("express");
const router = express.Router();

const customerController = require("../../controllers/public/customerController");

router.get("/", customerController.getAllCustomers);
router.get("/:id", customerController.getCustomerById);

module.exports = router;
