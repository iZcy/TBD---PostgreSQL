import {
  Author,
  Book,
  Contact,
  Customer,
  Distributor,
  Discount,
  Employee,
  Franchise,
  Location,
  Position,
  Profile,
  Publisher,
  Stock,
  Transaction,
  Writting,
  Wishlist
} from "@/configs/interfaces";

export type AnyListedType =
  | Author
  | Book
  | Contact
  | Customer
  | Distributor
  | Discount
  | Employee
  | Franchise
  | Location
  | Position
  | Profile
  | Publisher
  | Stock
  | Transaction
  | Writting
  | Wishlist;

export interface CallbackType {
  init: () => void;
  getSelfId: (id: string) => void;
  setNull: () => void;
}

export interface GlobalContextType {
  availableTables: string[];
  usingTable: string;
  setUsingTable: React.Dispatch<React.SetStateAction<string>>;
  usingIndex: number;
  usingData: AnyListedType[];
  theDataPicker: AnyListedType | null;
  usingInterface: {
    name: string;
    headers: string[];
  };
  usingCallback: CallbackType;
  dataLen: number;
}
