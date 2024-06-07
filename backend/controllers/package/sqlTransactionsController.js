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

// const turnWishlistToBuyQuery = require("../../database/package/turnWishlistToBuyQuery");
// const wishlistQuery = require("../../database/public/wishlistQuery");

// const turnWishlistToBuy = async (req, res, next) => {
//   try {
//     // get the wishlist object from the request
//     const wishlist = {
//       _customer: req.params.customerId,
//       _book: req.params.bookId
//     };

//     // ensure that the wishlist object is not null
//     if (!wishlist) {
//       res.status(400);
//       throw new Error("Wishlist object is null");
//     }

//     // ensure the wishlist object is not empty
//     if (Object.keys(wishlist).length === 0) {
//       res.status(400);
//       throw new Error("Wishlist object is empty");
//     }

//     // ensure the wishlist object doesn't have any invalid properties
//     const validKeys = ["_customer", "_book"];
//     const invalidKeys = Object.keys(wishlist).filter(
//       (key) => !validKeys.includes(key)
//     );
//     if (invalidKeys.length > 0) {
//       res.status(400);
//       throw new Error(
//         `Invalid wishlist fields provided for update: ${invalidKeys.join(", ")}`
//       );
//     }

//     // ensure the wishlist object has all required properties
//     if (!wishlist._customer || !wishlist._book) {
//       res.status(400);
//       throw new Error("Missing required wishlist fields");
//     }

//     // check if the wishlist exists
//     const wishlistExists = await wishlistQuery.checkWishlistExist(
//       wishlist._customer,
//       wishlist._book
//     );

//     if (wishlistExists.rowCount === 0) {
//       res.status(404);
//       throw new Error("Wishlist does not exist");
//     }

//     // turn the wishlist into a buy
//     const data = await turnWishlistToBuyQuery.turnWishlistToBuy(
//       wishlist._customer,
//       wishlist._book
//     );

//     // return a success message
//     return res
//       .status(200)
//       .json({ message: "Wishlist was turned into a buy successfully" });
//   } catch (err) {
//     next(err);
//   }
// };

module.exports = { makeBookAndWishlist };
