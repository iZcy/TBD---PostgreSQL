const express = require("express");
const router = express.Router();
const transactionController = require("../../controllers/public/transactionController");

router.get("/", transactionController.getAllTransactions);
router.get("/:id", transactionController.getTransactionById);

module.exports = router;
