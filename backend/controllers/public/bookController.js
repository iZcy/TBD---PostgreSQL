const bookQuery = require("../../database/public/bookQuery");
const publisherQuery = require("../../database/public/publisherQuery");

const getAllBooks = async (req, res, next) => {
  try {
    let data;

    data = await bookQuery.getAllBooks();

    if (data.rowCount === 0) {
      res.status(404);
      throw new Error("Data not found!");
    }

    return res.status(200).json({ data: data.rows });
  } catch (err) {
    next(err);
  }
};

const getBookById = async (req, res, next) => {
  try {
    const id = req.params.id;
    let data;

    data = await bookQuery.getBookById(id);

    if (data.rowCount === 0) {
      res.status(404);
      throw new Error("Data not found!");
    }

    return res.status(200).json({ data: data.rows });
  } catch (err) {
    next(err);
  }
};

const updateBook = async (req, res, next) => {
  try {
    // get the book id and book object from the request
    const id = req.params.id;
    const book = req.body;

    // ensure the book object exists
    if (!book) {
      res.status(400);
      throw new Error("Book object is null");
    }

    // ensure the book object is not empty
    if (Object.keys(book).length === 0) {
      res.status(400);
      throw new Error("Book object is empty");
    }

    // ensure that the book object doesn't have any invalid properties
    const validKeys = [
      "_publisher",
      "name",
      "publication_year",
      "pages",
      "price"
    ];
    const invalidKeys = Object.keys(book).filter(
      (key) => !validKeys.includes(key)
    );
    if (invalidKeys.length > 0) {
      res.status(400);
      throw new Error(
        `Invalid book fields provided for update: ${invalidKeys.join(", ")}`
      );
    }

    // ensure the book object has at least one valid property
    if (
      book._publisher === undefined &&
      book.name === undefined &&
      book.publication_year === undefined &&
      book.pages === undefined &&
      book.price === undefined
    ) {
      res.status(400);
      throw new Error("No valid book fields provided for update.");
    }

    // update the book
    const data = await bookQuery.updateBook(id, book);

    // ensure the book was updated
    if (data.rowCount === 0) {
      res.status(404);
      throw new Error("Data not found");
    }

    // return the updated book
    return res.status(200).json({
      message: `Book with id ${id} was updated successfully`
    });
  } catch (err) {
    next(err);
  }
};

const addBook = async (req, res, next) => {
  try {
    // get the book object from the request
    const book = req.body;

    // ensure that the book object is not null
    if (!book) {
      res.status(400);
      throw new Error("Book object is null");
    }

    // ensure the book object is not empty
    if (Object.keys(book).length === 0) {
      res.status(400);
      throw new Error("Book object is empty");
    }

    // ensure the book object doesn't have any invalid properties
    const validKeys = [
      "_publisher",
      "name",
      "publication_year",
      "pages",
      "price"
    ];
    const invalidKeys = Object.keys(book).filter(
      (key) => !validKeys.includes(key)
    );
    if (invalidKeys.length > 0) {
      res.status(400);
      throw new Error(
        `Invalid book fields provided for update: ${invalidKeys.join(", ")}`
      );
    }

    // check if book publisher exists in the request
    if (!book._publisher) {
      // if not, set the publisher to random publisher
      const publisherList = await publisherQuery.getAllPublishers();
      const randomPublisher =
        publisherList.rows[
          Math.floor(Math.random() * publisherList.rows.length)
        ];
      book._publisher = randomPublisher.publisher_key;
    }

    // ensure the book object has all required properties
    if (!book.name || !book.publication_year || !book.pages || !book.price) {
      res.status(400);
      throw new Error("Missing required book fields");
    }

    // ensure the same book doesn't already exist
    const bookExists = await bookQuery.checkBookSameDataExist(book);
    if (bookExists.rowCount > 0) {
      res.status(400);
      throw new Error("Book with the same data already exists");
    }

    // add the book
    const data = await bookQuery.addBook(book);

    // ensure the book was added
    if (data.rowCount === 0) {
      res.status(404);
      throw new Error("Data not found");
    }

    // return the added book
    return res.status(201).json({
      message: `Book of ${book.name} was added successfully`
    });
  } catch (err) {
    next(err);
  }
};

const deleteBook = async (req, res, next) => {
  try {
    // get the book id from the request
    const id = req.params.id;

    // ensure the book id is not null
    if (!id) {
      res.status(400);
      throw new Error("Book id is null");
    }

    // ensure the data exists
    const bookData = await bookQuery.getBookById(id);
    if (bookData.rowCount === 0) {
      res.status(404);
      throw new Error("Data not found");
    }

    // delete the book
    const data = await bookQuery.deleteBook(id);

    // ensure the book was deleted
    if (data.rowCount === 0) {
      res.status(404);
      throw new Error("Data not found");
    }

    // return the deleted book
    return res.status(200).json({
      message: `Book with id ${id} was deleted successfully`
    });
  } catch (err) {
    next(err);
  }
};

const getBookByFilter = async (req, res, next) => {
  try {
    const filter = req.body;
    let data;

    // Check if filter is null
    if (!filter) {
      res.status(400);
      throw new Error("Filter is null");
    }

    // Check if the filter is empty
    if (Object.keys(filter).length === 0) {
      res.status(400);
      throw new Error("Filter is empty");
    }

    // Check if the filter has any invalid properties
    const validKeys = [
      "_publisher",
      "name",
      "publication_year",
      "pages",
      "price"
    ];

    const invalidKeys = Object.keys(filter).filter(
      (key) => !validKeys.includes(key)
    );

    if (invalidKeys.length > 0) {
      res.status(400);
      throw new Error(
        `Invalid book fields provided for filter: ${invalidKeys.join(", ")}`
      );
    }

    // Get the book data
    data = await bookQuery.findBook(filter);

    if (data.rowCount === 0) {
      res.status(404);
      throw new Error("Data not found!");
    }

    return res.status(200).json({ data: data.rows });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllBooks,
  getBookById,
  updateBook,
  addBook,
  deleteBook,
  getBookByFilter
};
