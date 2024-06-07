const tables = require("../../config/tables");
const db = require("../../config/connectDb");

const getAllDbWithFilter = async (filter) =>
  new Promise((resolve, reject) => {
    // parse filter for each table
    // const {
    //   transaction: { transaction_key, _discount, _stock, _employee, _customer },
    //   discount: { discount_key, discount_code, discount_amount, discount_type },
    //   stock: { stock_key, _book, stock_quantity, stock_price },
    //   book: {
    //     book_key,
    //     book_title,
    //     book_year,
    //     book_price,
    //     book_pages,
    //     book_isbn,
    //     _publisher
    //   },
    //   writtings: { _author },
    //   publisher: { publisher_key, publisher_name, _location, _contact },
    //   location: { location_key, country, state, city, street },
    //   contact: {
    //     contact_key,
    //     phone,
    //     email,
    //     website,
    //     instagram,
    //     whatsapp,
    //     line
    //   },
    //   employee: { employee_key, _profile, _position, _franchise },
    //   profile: { profile_key, profile_name },
    //   position: { position_key, position_name },
    //   franchise: { franchise_key, _distributor },
    //   distributor: { distributor_key, distributor_name },
    //   customer: { customer_key, customer_name, customer_email, customer_phone },
    //   wishlist: { _customer: wishlist_customer, _book: wishlist_book },
    //   author: { author_key, author_name }
    // } = filter;

    // // Build the filter
    // const filterQuery = [];
    // if (transaction_key)
    //   filterQuery.push(
    //     `${tables.transaction.table}._transaction_key ${transaction_key}`
    //   );
    // if (_discount)
    //   filterQuery.push(`${tables.transaction.table}._discount ${_discount}`);
    // if (_stock)
    //   filterQuery.push(`${tables.transaction.table}._stock ${_stock}`);
    // if (_employee)
    //   filterQuery.push(`${tables.transaction.table}._employee ${_employee}`);
    // if (_customer)
    //   filterQuery.push(`${tables.transaction.table}._customer ${_customer}`);
    // if (discount_key)
    //   filterQuery.push(
    //     `${tables.discount.table}.discount_key ${discount_key}`
    //   );
    // if (discount_code)
    //   filterQuery.push(
    //     `${tables.discount.table}.discount_code ${discount_code}`
    //   );
    // if (discount_amount)
    //   filterQuery.push(
    //     `${tables.discount.table}.discount_amount ${discount_amount}`
    //   );
    // if (discount_type)
    //   filterQuery.push(
    //     `${tables.discount.table}.discount_type ${discount_type}`
    //   );
    // if (stock_key)
    //   filterQuery.push(`${tables.stock.table}.stock_key ${stock_key}`);
    // if (_book) filterQuery.push(`${tables.stock.table}._book ${_book}`);
    // if (stock_quantity)
    //   filterQuery.push(
    //     `${tables.stock.table}.stock_quantity ${stock_quantity}`
    //   );
    // if (stock_price)
    //   filterQuery.push(`${tables.stock.table}.stock_price ${stock_price}`);
    // if (book_key)
    //   filterQuery.push(`${tables.book.table}.book_key ${book_key}`);
    // if (book_title)
    //   filterQuery.push(`${tables.book.table}.book_title ${book_title}`);
    // if (book_year)
    //   filterQuery.push(`${tables.book.table}.book_year ${book_year}`);
    // if (book_price)
    //   filterQuery.push(`${tables.book.table}.book_price ${book_price}`);
    // if (book_pages)
    //   filterQuery.push(`${tables.book.table}.book_pages ${book_pages}`);
    // if (book_isbn)
    //   filterQuery.push(`${tables.book.table}.book_isbn ${book_isbn}`);
    // if (_publisher)
    //   filterQuery.push(`${tables.book.table}._publisher ${_publisher}`);
    // if (_author)
    //   filterQuery.push(`${tables.writtings.table}._author ${_author}`);
    // if (publisher_key)
    //   filterQuery.push(
    //     `${tables.publisher.table}.publisher_key ${publisher_key}`
    //   );
    // if (publisher_name)
    //   filterQuery.push(
    //     `${tables.publisher.table}.publisher_name ${publisher_name}`
    //   );
    // if (_location)
    //   filterQuery.push(`${tables.publisher.table}._location ${_location}`);
    // if (_contact)
    //   filterQuery.push(`${tables.publisher.table}._contact ${_contact}`);
    // if (location_key)
    //   filterQuery.push(
    //     `${tables.location.table}.location_key ${location_key}`
    //   );
    // if (country)
    //   filterQuery.push(`${tables.location.table}.country ${country}`);
    // if (state) filterQuery.push(`${tables.location.table}.state ${state}`);
    // if (city) filterQuery.push(`${tables.location.table}.city ${city}`);
    // if (street) filterQuery.push(`${tables.location.table}.street ${street}`);
    // if (contact_key)
    //   filterQuery.push(`${tables.contact.table}.contact_key ${contact_key}`);
    // if (phone) filterQuery.push(`${tables.contact.table}.phone ${phone}`);
    // if (email) filterQuery.push(`${tables.contact.table}.email ${email}`);
    // if (website)
    //   filterQuery.push(`${tables.contact.table}.website ${website}`);
    // if (instagram)
    //   filterQuery.push(`${tables.contact.table}.instagram ${instagram}`);
    // if (whatsapp)
    //   filterQuery.push(`${tables.contact.table}.whatsapp ${whatsapp}`);
    // if (line) filterQuery.push(`${tables.contact.table}.line ${line}`);
    // if (employee_key)
    //   filterQuery.push(
    //     `${tables.employee.table}.employee_key ${employee_key}`
    //   );
    // if (_profile)
    //   filterQuery.push(`${tables.employee.table}._profile ${_profile}`);
    // if (_position)
    //   filterQuery.push(`${tables.employee.table}._position ${_position}`);
    // if (_franchise)
    //   filterQuery.push(`${tables.employee.table}._franchise = ${_franchise}`);
    // if (profile_key)
    //   filterQuery.push(`${tables.profile.table}.profile_key = ${profile_key}`);
    // if (profile_name)
    //   filterQuery.push(
    //     `${tables.profile.table}.profile_name = ${profile_name}`
    //   );
    // if (position_key)
    //   filterQuery.push(
    //     `${tables.position.table}.position_key = ${position_key}`
    //   );
    // if (position_name)
    //   filterQuery.push(
    //     `${tables.position.table}.position_name = ${position_name}`
    //   );
    // if (franchise_key)
    //   filterQuery.push(
    //     `${tables.franchise.table}.franchise_key = ${franchise_key}`
    //   );
    // if (_distributor)
    //   filterQuery.push(
    //     `${tables.franchise.table}._distributor = ${_distributor}`
    //   );
    // if (distributor_key)
    //   filterQuery.push(
    //     `${tables.distributor.table}.distributor_key = ${distributor_key}`
    //   );
    // if (distributor_name)
    //   filterQuery.push(
    //     `${tables.distributor.table}.distributor_name = ${distributor_name}`
    //   );
    // if (customer_key)
    //   filterQuery.push(
    //     `${tables.customer.table}.customer_key = ${customer_key}`
    //   );
    // if (customer_name)
    //   filterQuery.push(
    //     `${tables.customer.table}.customer_name = ${customer_name}`
    //   );
    // if (customer_email)
    //   filterQuery.push(
    //     `${tables.customer.table}.customer_email = ${customer_email}`
    //   );
    // if (customer_phone)
    //   filterQuery.push(
    //     `${tables.customer.table}.customer_phone = ${customer_phone}`
    //   );
    // if (wishlist_customer)
    //   filterQuery.push(
    //     `${tables.wishlist.table}._customer = ${wishlist_customer}`
    //   );
    // if (wishlist_book)
    //   filterQuery.push(`${tables.wishlist.table}._book = ${wishlist_book}`);
    // if (author_key)
    //   filterQuery.push(`${tables.author.table}.author_key = ${author_key}`);
    // if (author_name)
    //   filterQuery.push(`${tables.author.table}.author_name = ${author_name}`);

    // buuld query
    const query = `
    SELECT
    *
    FROM
    ${tables.transaction.table}
    FULL JOIN ${tables.discount.table} ON ${tables.transaction.table}._discount = ${tables.discount.table}.discount_key
    FULL JOIN ${tables.stock.table} ON ${tables.transaction.table}._stock = ${tables.stock.table}.stock_key
    FULL JOIN ${tables.book.table} ON ${tables.stock.table}._book = ${tables.book.table}.book_key
    FULL JOIN ${tables.writtings.table} ON ${tables.book.table}.book_key = ${tables.writtings.table}._book
    FULL JOIN ${tables.publisher.table} ON ${tables.book.table}._publisher = ${tables.publisher.table}.publisher_key
    FULL JOIN ${tables.location.table} ON ${tables.publisher.table}._location = ${tables.location.table}.location_key
    FULL JOIN ${tables.contact.table} ON ${tables.publisher.table}._contact = ${tables.contact.table}.contact_key
    FULL JOIN ${tables.employee.table} ON ${tables.transaction.table}._employee = ${tables.employee.table}.employee_key
    FULL JOIN ${tables.profile.table} ON ${tables.employee.table}._profile = ${tables.profile.table}.profile_key
    FULL JOIN ${tables.position.table} ON ${tables.employee.table}._position = ${tables.position.table}.position_key
    FULL JOIN ${tables.franchise.table} ON ${tables.employee.table}._franchise = ${tables.franchise.table}.franchise_key
    FULL JOIN ${tables.distributor.table} ON ${tables.franchise.table}._distributor = ${tables.distributor.table}.distributor_key
    FULL JOIN ${tables.customer.table} ON ${tables.transaction.table}._customer = ${tables.customer.table}.customer_key
    FULL JOIN ${tables.wishlist.table} ON ${tables.customer.table}.customer_key = ${tables.wishlist.table}._customer
    FULL JOIN ${tables.author.table} ON ${tables.writtings.table}._author = ${tables.author.table}.author_key
    `;

    // execute query
    db.query(query, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });

module.exports = {
  getAllDbWithFilter
};
