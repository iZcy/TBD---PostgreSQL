const express = require("express");
const router = express.Router();

const distributorController = require("../../controllers/public/distributorController");

router.get("/", distributorController.getAllDistributors);
router.get("/:id", distributorController.getDistributorById);

module.exports = router;
