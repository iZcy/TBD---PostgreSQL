const express = require("express");
const router = express.Router();
const testController = require("../controllers/testController");

router.get("/", testController.testResponse);
router.get("/transactions", testController.testGetAllTransaction);

module.exports = router;
