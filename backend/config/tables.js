const tables = {
  author: {
    table: 'public."AUTHOR"',
    primary: "author_key"
  },
  customer: {
    table: 'public."CUSTOMER"',
    primary: "customer_key"
  },
  location: {
    table: 'public."LOCATION"',
    primary: "location_key"
  },
  profile: {
    table: 'public."PROFILE"',
    primary: "profile_key"
  },
  publisher: {
    table: 'public."PUBLISHER"',
    primary: "publisher_key"
  },
  contact: {
    table: 'public."CONTACT"',
    primary: "contact_key"
  },
  book: {
    table: 'public."BOOK"',
    primary: "book_key"
  },
  transaction: {
    table: 'public."TRANSACTION"',
    primary: "_transaction_key"
  },
  writtings: {
    table: 'public."WRITTINGS"',
    primary: "_book"
  },
  franchise: {
    table: 'public."FRANCHISE"',
    primary: "franchise_key"
  },
  discount: {
    table: 'public."DISCOUNT"',
    primary: "discount_key"
  },
  employee: {
    table: 'public."EMPLOYEE"',
    primary: "employee_key"
  },
  position: {
    table: 'public."POSITION"',
    primary: "position_key"
  },
  distributor: {
    table: 'public."DISTRIBUTOR"',
    primary: "distributor_key"
  },
  wishlist: {
    table: 'public."WISHLIST"',
    primary: "_customer"
  },
  stock: {
    table: 'public."STOCK"',
    primary: "stock_key"
  }
};

module.exports = tables;
