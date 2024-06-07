const express = require("express");
const router = express.Router();

const bookController = require("../../controllers/public/bookController");
const makeBookAndWishlistController = require("../../controllers/package/makeBookAndWIshlistController");

router
  .post("/", bookController.addBook)
  .get("/", bookController.getAllBooks)
  .post("/find", bookController.getBookByFilter);
router
  .get("/:id", bookController.getBookById)
  .put("/:id", bookController.updateBook)
  .delete("/:id", bookController.deleteBook);
router.post("/makeAndWish", makeBookAndWishlistController.makeBookAndWishlist);

module.exports = router;
