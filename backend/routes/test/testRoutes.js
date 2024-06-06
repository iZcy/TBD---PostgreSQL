const express = require("express");
const router = express.Router();
const testController = require("../../controllers/test/testController");

router.get("/", testController.testResponse);
router.get("/transactions", testController.testGetAllTransaction);
router.get("/transactions/:id", testController.testGetTransactionById);

module.exports = router;
