const makeBookAndWishlistQuery = require("../../database/package/makeBookAndWishlistQuery");
const bookQuery = require("../../database/public/bookQuery");

const makeBookAndWishlist = async (req, res, next) => {
  try {
    // get the book and wishlist objects from the request
    const { book, wishlist } = req.body;

    // Check if the book with the same data already exists
    const bookExists = await bookQuery.checkBookSameDataExist(book);
    if (bookExists.rowCount > 0) {
      res.status(400);
      throw new Error("Book with the same data already exists");
    }

    // ensure that the book and wishlist objects are not null
    if (!book || !wishlist) {
      res.status(400);
      throw new Error("Book or wishlist object is null");
    }

    // ensure the book and wishlist objects are not empty
    if (Object.keys(book).length === 0 || Object.keys(wishlist).length === 0) {
      res.status(400);
      throw new Error("Book or wishlist object is empty");
    }

    // ensure the book and wishlist objects don't have any invalid properties
    const validBookKeys = [
      "_publisher",
      "name",
      "publication_year",
      "pages",
      "price"
    ];
    const invalidBookKeys = Object.keys(book).filter(
      (key) => !validBookKeys.includes(key)
    );
    if (invalidBookKeys.length > 0) {
      res.status(400);
      throw new Error(
        `Book object has invalid keys: ${invalidBookKeys.join(", ")}`
      );
    }

    const validWishlistKeys = ["_customer"];
    const invalidWishlistKeys = Object.keys(wishlist).filter(
      (key) => !validWishlistKeys.includes(key)
    );
    if (invalidWishlistKeys.length > 0) {
      res.status(400);
      throw new Error(
        `Wishlist object has invalid keys: ${invalidWishlistKeys.join(", ")}`
      );
    }

    // make the book and wishlist
    const data = await makeBookAndWishlistQuery.makeBookAndWishlist(
      book,
      wishlist
    );

    return res
      .status(201)
      .json({ message: "Book and wishlist were added successfully" });
  } catch (err) {
    next(err);
  }
};

module.exports = { makeBookAndWishlist };
