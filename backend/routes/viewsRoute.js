const express = require("express");
const router = express.Router();
const viewsController = require("../controllers/viewsController");

router.get("/transactions", viewsController.getTransactionView);
router.get("/staffs", viewsController.getStaffView);

module.exports = router;
