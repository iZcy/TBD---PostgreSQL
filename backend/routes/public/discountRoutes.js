const express = require("express");
const router = express.Router();

const discountController = require("../../controllers/public/discountController");

router.get("/", discountController.getAllDiscounts);
router.get("/:id", discountController.getDiscountById);

module.exports = router;
