export interface Author {
  author_key: string;
  _profile: string;
  joined_at: string;
}

export interface Book {
  book_key: string;
  _publisher: string;
  name: string;
  publication_year: number;
  pages: number;
  price: number;
}

export interface Contact {
  contact_key: string;
  phone: string;
  email: string;
  website: string;
  instagram: string;
  whatsapp: string;
  line: string;
}

export interface Customer {
  customer_key: string;
  _profile: string;
  joined_at: string;
}

export interface Distributor {
  distributor_key: string;
  name: string;
  local_price: number;
}

export interface Discount {
  discount_key: string;
  code: string;
  value: number;
  expire: string;
}

export interface Employee {
  employee_key: string;
  _profile: string;
  _position: string;
  _franchise: string;
  recruited_at: string;
}

export interface Franchise {
  franchise_key: string;
  _owner: string;
  _location: string;
  _distributor: string;
  name: string;
}

export interface Location {
  location_key: string;
  country: string;
  state: string;
  city: string;
  street: string;
}

export interface Position {
  position_key: string;
  title: string;
  salary: number;
}

export interface Profile {
  profile_key: string;
  _contact: string;
  _birth_place: string;
  _address: string;
  full_name: string;
  nickname: string;
  profession: string;
  date_born: string;
  date_death: string;
}

export interface Publisher {
  publisher_key: string;
  _location: string;
  _contact: string;
  year_founded: number;
}

export interface Stock {
  stock_key: string;
  _book: string;
  _franchise: string;
}

export interface Transaction {
  _transaction_key: string;
  _stock: string;
  _customer: string;
  _discount: string | null;
  _employee: string;
  timestamp: string;
}

export interface Writting {
  _book: string;
  _author: string;
}

export interface Wishlist {
  _customer: string;
  _book: string;
}
