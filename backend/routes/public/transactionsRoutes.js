const express = require("express");
const router = express.Router();
const transactionsController = require("../../controllers/public/transactionsController");

router.get("/", transactionsController.getAllTransaction);
router.get("/:id", transactionsController.getTransactionById);

module.exports = router;
