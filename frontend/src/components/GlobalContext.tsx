// MyContext.tsx
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useCallback,
  useMemo
} from "react";

import { GlobalContextType } from "@/configs/extras";

// Define the shape of the context value

// Create a context with a default value of undefined
const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

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
import { interfacesBreakdowns } from "@/configs/interfacesBreakdowns";

import {
  initAuthor,
  initBook,
  initContact,
  initCustomer,
  initDistributor,
  initDiscount,
  initEmployee,
  initFranchise,
  initLocation,
  initPosition,
  initProfile,
  initPublisher,
  initStock,
  initTransaction,
  initWritting,
  initWishlist
} from "@/controllers/publicInits";
import {
  getPickedAuthor,
  getPickedBook,
  getPickedContact,
  getPickedCustomer,
  getPickedDistributor,
  getPickedDiscount,
  getPickedEmployee,
  getPickedFranchise,
  getPickedLocation,
  getPickedPosition,
  getPickedProfile,
  getPickedPublisher,
  getPickedStock,
  getPickedTransaction,
  getPickedWritting,
  getPickedWishlist
} from "@/controllers/publicSetPickers";

// Create a provider component
export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const availableTables: string[] = [
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
  ];

  const [usingTable, setUsingTable] = useState<string>("");

  const usingIndex: number = interfacesBreakdowns.findIndex(
    (intf) => intf.name === usingTable
  );

  const [authors, setAuthors] = useState<Author[]>([]);
  const [books, setBooks] = useState<Book[]>([]);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [distributors, setDistributors] = useState<Distributor[]>([]);
  const [discounts, setDiscounts] = useState<Discount[]>([]);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [franchises, setFranchises] = useState<Franchise[]>([]);
  const [locations, setLocations] = useState<Location[]>([]);
  const [positions, setPositions] = useState<Position[]>([]);
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [publishers, setPublishers] = useState<Publisher[]>([]);
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [writtings, setWrittings] = useState<Writting[]>([]);
  const [wishlists, setWishlists] = useState<Wishlist[]>([]);

  const [pickedAuthor, setPickedAuthor] = useState<Author | null>(null);
  const [pickedBook, setPickedBook] = useState<Book | null>(null);
  const [pickedContact, setPickedContact] = useState<Contact | null>(null);
  const [pickedCustomer, setPickedCustomer] = useState<Customer | null>(null);
  const [pickedDistributor, setPickedDistributor] =
    useState<Distributor | null>(null);
  const [pickedDiscount, setPickedDiscount] = useState<Discount | null>(null);
  const [pickedEmployee, setPickedEmployee] = useState<Employee | null>(null);
  const [pickedFranchise, setPickedFranchise] = useState<Franchise | null>(
    null
  );
  const [pickedLocation, setPickedLocation] = useState<Location | null>(null);
  const [pickedPosition, setPickedPosition] = useState<Position | null>(null);
  const [pickedProfile, setPickedProfile] = useState<Profile | null>(null);
  const [pickedPublisher, setPickedPublisher] = useState<Publisher | null>(
    null
  );
  const [pickedStock, setPickedStock] = useState<Stock | null>(null);
  const [pickedTransaction, setPickedTransaction] =
    useState<Transaction | null>(null);
  const [pickedWritting, setPickedWritting] = useState<Writting | null>(null);
  const [pickedWishlist, setPickedWishlist] = useState<Wishlist | null>(null);

  // Combine all the data into one Array
  const theData = [
    authors,
    books,
    contacts,
    customers,
    distributors,
    discounts,
    employees,
    franchises,
    locations,
    positions,
    profiles,
    publishers,
    stocks,
    transactions,
    writtings,
    wishlists
  ];
  const usingData = theData[usingIndex];

  // Combine all the get pickeds into one Array
  const getPickedData = [
    pickedAuthor,
    pickedBook,
    pickedContact,
    pickedCustomer,
    pickedDistributor,
    pickedDiscount,
    pickedEmployee,
    pickedFranchise,
    pickedLocation,
    pickedPosition,
    pickedProfile,
    pickedPublisher,
    pickedStock,
    pickedTransaction,
    pickedWritting,
    pickedWishlist
  ];
  const theDataPicker = getPickedData[usingIndex];

  const usingInterface = interfacesBreakdowns[usingIndex];
  const dataLen: number = usingInterface?.headers.length || 0;

  const callbacks = useMemo(
    () => [
      {
        init: () => initAuthor(setAuthors),
        getSelfId: (id: string) => getPickedAuthor(id, setPickedAuthor),
        setNull: () => setPickedAuthor(null)
      },
      {
        init: () => initBook(setBooks),
        getSelfId: (id: string) => getPickedBook(id, setPickedBook),
        setNull: () => setPickedBook(null)
      },
      {
        init: () => initContact(setContacts),
        getSelfId: (id: string) => getPickedContact(id, setPickedContact),
        setNull: () => setPickedContact(null)
      },
      {
        init: () => initCustomer(setCustomers),
        getSelfId: (id: string) => getPickedCustomer(id, setPickedCustomer),
        setNull: () => setPickedCustomer(null)
      },
      {
        init: () => initDistributor(setDistributors),
        getSelfId: (id: string) =>
          getPickedDistributor(id, setPickedDistributor),
        setNull: () => setPickedDistributor(null)
      },
      {
        init: () => initDiscount(setDiscounts),
        getSelfId: (id: string) => getPickedDiscount(id, setPickedDiscount),
        setNull: () => setPickedDiscount(null)
      },
      {
        init: () => initEmployee(setEmployees),
        getSelfId: (id: string) => getPickedEmployee(id, setPickedEmployee),
        setNull: () => setPickedEmployee(null)
      },
      {
        init: () => initFranchise(setFranchises),
        getSelfId: (id: string) => getPickedFranchise(id, setPickedFranchise),
        setNull: () => setPickedFranchise(null)
      },
      {
        init: () => initLocation(setLocations),
        getSelfId: (id: string) => getPickedLocation(id, setPickedLocation),
        setNull: () => setPickedLocation(null)
      },
      {
        init: () => initPosition(setPositions),
        getSelfId: (id: string) => getPickedPosition(id, setPickedPosition),
        setNull: () => setPickedPosition(null)
      },
      {
        init: () => initProfile(setProfiles),
        getSelfId: (id: string) => getPickedProfile(id, setPickedProfile),
        setNull: () => setPickedProfile(null)
      },
      {
        init: () => initPublisher(setPublishers),
        getSelfId: (id: string) => getPickedPublisher(id, setPickedPublisher),
        setNull: () => setPickedPublisher(null)
      },
      {
        init: () => initStock(setStocks),
        getSelfId: (id: string) => getPickedStock(id, setPickedStock),
        setNull: () => setPickedStock(null)
      },
      {
        init: () => initTransaction(setTransactions),
        getSelfId: (id: string) =>
          getPickedTransaction(id, setPickedTransaction),
        setNull: () => setPickedTransaction(null)
      },
      {
        init: () => initWritting(setWrittings),
        getSelfId: (id: string) => getPickedWritting(id, setPickedWritting),
        setNull: () => setPickedWritting(null)
      },
      {
        init: () => initWishlist(setWishlists),
        getSelfId: (id: string) => getPickedWishlist(id, setPickedWishlist),
        setNull: () => setPickedWishlist(null)
      }
    ],
    []
  );

  const usingCallback = useMemo(() => {
    if (usingIndex >= 0 && usingIndex < callbacks.length) {
      callbacks[usingIndex].init();
      return callbacks[usingIndex];
    }
    return { init: () => {}, getSelfId: () => {}, setNull: () => {} };
  }, [usingIndex, callbacks]);

  return (
    <GlobalContext.Provider
      value={{
        availableTables,
        usingTable,
        setUsingTable,
        usingIndex,
        usingData,
        theDataPicker,
        usingInterface,
        usingCallback,
        dataLen
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// Custom hook for using the context
export const useGlobalContext = (): GlobalContextType => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};
