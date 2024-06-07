const express = require("express");
const router = express.Router();

const customerController = require("../../controllers/public/customerController");
const customerWithProfile = require("../../controllers/package/customerWithProfileController");

router.get("/", customerController.getAllCustomers);
router.get("/full", customerWithProfile.getAllCustomersWithProfiles);
router.get("/:id", customerController.getCustomerById);

module.exports = router;
