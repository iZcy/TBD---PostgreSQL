const express = require("express");
const router = express.Router();

const contactController = require("../../controllers/public/contactController");

router
  .post("/", contactController.addContact)
  .get("/", contactController.getAllContacts);
router
  .get("/:id", contactController.getContactById)
  .put("/:id", contactController.updateContact)
  .delete("/:id", contactController.deleteContact);

module.exports = router;
