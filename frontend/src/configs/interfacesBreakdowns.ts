// Label the interfaces
export const interfacesBreakdowns = [
  {
    index: 0,
    name: "Author",
    interface: {
      author_key: "",
      _profile: "",
      joined_at: ""
    },
    headers: ["Author Key", "Profile", "Joined At"],
    show: "author_key"
  },
  {
    index: 1,
    name: "Book",
    interface: {
      book_key: "",
      _publisher: "",
      name: "",
      publication_year: 0,
      pages: 0,
      price: 0
    },
    headers: [
      "Book Key",
      "Publisher",
      "Name",
      "Publication Year",
      "Pages",
      "Price"
    ],
    show: "name"
  },
  {
    index: 2,
    name: "Contact",
    interface: {
      contact_key: "",
      phone: "",
      email: "",
      website: "",
      instagram: "",
      whatsapp: "",
      line: ""
    },
    headers: [
      "Contact Key",
      "Phone",
      "Email",
      "Website",
      "Instagram",
      "Whatsapp",
      "Line"
    ],
    show: "phone"
  },
  {
    index: 3,
    name: "Customer",
    interface: {
      customer_key: "",
      _profile: "",
      joined_at: ""
    },
    headers: ["Customer Key", "Profile", "Joined At"],
    show: "customer_key"
  },
  {
    index: 4,
    name: "Distributor",
    interface: {
      distributor_key: "",
      name: "",
      local_price: 0
    },
    headers: ["Distributor Key", "Name", "Local Price"],
    show: "name"
  },
  {
    index: 5,
    name: "Discount",
    interface: {
      discount_key: "",
      code: "",
      value: 0,
      expire: ""
    },
    headers: ["Discount Key", "Code", "Value", "Expire"],
    show: "code"
  },
  {
    index: 6,
    name: "Employee",
    interface: {
      employee_key: "",
      _profile: "",
      _position: "",
      _franchise: "",
      recruited_at: ""
    },
    headers: [
      "Employee Key",
      "Profile",
      "Position",
      "Franchise",
      "Recruited At"
    ],
    show: "employee_key"
  },
  {
    index: 7,
    name: "Franchise",
    interface: {
      franchise_key: "",
      _owner: "",
      _location: "",
      _distributor: "",
      name: ""
    },
    headers: ["Franchise Key", "Owner", "Location", "Distributor", "Name"],
    show: "name"
  },
  {
    index: 8,
    name: "Location",
    interface: {
      location_key: "",
      country: "",
      state: "",
      city: "",
      street: ""
    },
    headers: ["Location Key", "Country", "State", "City", "Street"],
    show: "country"
  },
  {
    index: 9,
    name: "Position",
    interface: {
      position_key: "",
      title: "",
      salary: 0
    },
    headers: ["Position Key", "Title", "Salary"],
    show: "title"
  },
  {
    index: 10,
    name: "Profile",
    interface: {
      profile_key: "",
      _contact: "",
      _birth_place: "",
      _address: "",
      full_name: "",
      nickname: "",
      profession: "",
      date_born: "",
      date_death: ""
    },
    headers: [
      "Profile Key",
      "Contact",
      "Birth Place",
      "Address",
      "Full Name",
      "Nickname",
      "Profession",
      "Date Born",
      "Date Death"
    ],
    show: "full_name"
  },
  {
    index: 11,
    name: "Publisher",
    interface: {
      publisher_key: "",
      _location: "",
      _contact: "",
      year_founded: 0
    },
    headers: ["Publisher Key", "Location", "Contact", "Year Founded"],
    show: "publisher_key"
  },
  {
    index: 12,
    name: "Stock",
    interface: {
      stock_key: "",
      _book: "",
      _franchise: ""
    },
    headers: ["Stock Key", "Book", "Franchise"],
    show: "stock_key"
  },
  {
    index: 13,
    name: "Transaction",
    interface: {
      _transaction_key: "",
      _stock: "",
      _customer: "",
      _discount: "",
      _employee: "",
      timestamp: ""
    },
    headers: [
      "Transaction Key",
      "Stock",
      "Customer",
      "Discount",
      "Employee",
      "Timestamp"
    ],
    show: "_transaction_key"
  },
  {
    index: 14,
    name: "Writting",
    interface: {
      _book: "",
      _author: ""
    },
    headers: ["Book", "Author"],
    show: "_book"
  },
  {
    index: 15,
    name: "Wishlist",
    interface: {
      _customer: "",
      _book: ""
    },
    headers: ["Customer", "Book"],
    show: "_customer"
  },
  {
    index: 16,
    name: "BigData",
    interface: {
      theAuthor: [],
      theBook: [],
      theContact: [],
      theCustomer: [],
      theDistributor: [],
      theDiscount: [],
      theEmployee: [],
      theFranchise: [],
      theLocation: [],
      thePosition: [],
      theProfile: [],
      thePublisher: [],
      theStock: [],
      theTransaction: [],
      theWritting: [],
      theWishlist: []
    },
    headers: [
      "Author",
      "Book",
      "Contact",
      "Customer",
      "Distributor",
      "Discount",
      "Employee",
      "Franchise",
      "Location",
      "Position",
      "Profile",
      "Publisher",
      "Stock",
      "Transaction",
      "Writting",
      "Wishlist"
    ]
  }
];
