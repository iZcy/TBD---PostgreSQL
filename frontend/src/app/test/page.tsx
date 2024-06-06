"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

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
} from "../../configs/interfaces";
import { interfacesBreakdowns } from "../../configs/interfacesBreakdowns";

import { initTransaction } from "@/controllers/testInits";
import { getPickedTransaction } from "@/controllers/testSetPickers";

export default function TestPage() {
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

  const usingTable: string = "Transaction";

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
  const bigData = [
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
  const usingData = bigData[usingIndex];

  // Combine all the setters into one Array
  const setBigData = [
    setAuthors,
    setBooks,
    setContacts,
    setCustomers,
    setDistributors,
    setDiscounts,
    setEmployees,
    setFranchises,
    setLocations,
    setPositions,
    setProfiles,
    setPublishers,
    setStocks,
    setTransactions,
    setWrittings,
    setWishlists
  ];
  const bigDataSetter = setBigData[usingIndex];

  // Combine all the set pickers into one Array
  const setPickedData = [
    setPickedAuthor,
    setPickedBook,
    setPickedContact,
    setPickedCustomer,
    setPickedDistributor,
    setPickedDiscount,
    setPickedEmployee,
    setPickedFranchise,
    setPickedLocation,
    setPickedPosition,
    setPickedProfile,
    setPickedPublisher,
    setPickedStock,
    setPickedTransaction,
    setPickedWritting,
    setPickedWishlist
  ];
  const bigDataSetPicker = setPickedData[usingIndex];

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
  const bigDataPicker = getPickedData[usingIndex];

  const usingInterface = interfacesBreakdowns[usingIndex];
  const dataLen: number = usingInterface.headers.length;

  useEffect(() => {
    initTransaction(setTransactions);
  }, []);

  const classTable: string =
    "px-[2vw] border-white border-[.2vw] tracking-wider";

  return (
    <div className="flex flex-col gap-[10vh]">
      <div className="flex flex-col gap-[5vh] text-white">
        <p>Pick Data: </p>
        <select
          className="w-[50vw] text-black"
          // Get self value and pass it to the function
          onChange={(e) => {
            getPickedTransaction(e.target.value, setPickedTransaction);
          }}
        >
          {
            // Add an empty option to the select element as default
            <option value="" onClick={() => setPickedTransaction(null)}>
              Pick a transaction
            </option>
          }
          {usingData.map(
            (
              obj:
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
                | Wishlist,
              idx: number
            ) => (
              <option
                key={idx}
                value={
                  // parse obj into array and get the first element
                  Object.entries(obj)[0][1]
                }
              >
                {Object.entries(obj)[0][1]}
              </option>
            )
          )}
        </select>
        <p>The Data: </p>
        {bigDataPicker === null ? (
          <p>Waiting for Pick...</p>
        ) : (
          <div className="flex flex-col gap-[1vh]">
            {Object.entries(bigDataPicker).map((key, idx) => (
              <p key={idx + key[0]}>
                {usingInterface.headers[idx]}: {key[1]}
              </p>
            ))}
          </div>
        )}
      </div>
      <table className="text-white">
        <thead>
          <tr>
            <th className={classTable}>No</th>
            {Object.entries(usingInterface.headers).map((key, idx) => (
              <th key={idx} className={classTable}>
                {key[1]}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="gap-[5vh]">
          {usingData.length === 0 ? (
            <tr>
              <td
                colSpan={dataLen + 1}
                className={twMerge("col-span-full", classTable, "text-center")}
              >
                Waiting for Process...
              </td>
            </tr>
          ) : (
            usingData.map(
              (
                obj:
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
                  | Wishlist,
                idx: number
              ) => (
                <tr key={"no_" + idx}>
                  <td className={classTable}>{idx + 1}</td>
                  {
                    /* Loop through object */
                    Object.entries(obj).map(([key, value]) => (
                      <td key={key} className={classTable}>
                        {value}
                      </td>
                    ))
                  }
                </tr>
              )
            )
          )}
        </tbody>
      </table>
    </div>
  );
}
