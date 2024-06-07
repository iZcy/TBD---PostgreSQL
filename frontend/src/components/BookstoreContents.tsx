"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { routersAPI } from "@/configs/routers";
import axios from "axios";
import { Book, Wishlist } from "@/configs/interfaces";
import { twMerge } from "tailwind-merge";

export default function BookstoreContents() {
  const router = useRouter();
  const [pickedCustomer, setPickedCustomer] = useState<string>("");
  const [customerList, setCustomerList] = useState<any[]>([]);
  const [availableBooks, setAvailableBooks] = useState<Book[]>([]);
  const [booksInWishlist, setBooksInWishlist] = useState<Book[]>([]);

  useEffect(() => {
    axios.get(routersAPI.public.customers.getFull).then((res) => {
      setCustomerList(res.data.data);
    });

    axios.get(routersAPI.public.books.getAll).then((res) => {
      setAvailableBooks(res.data.data);
    });
  }, []);

  const refetch = useCallback(
    (pickId: string) => {
      setBooksInWishlist([]);

      if (pickId !== "empty")
        axios
          .get(`${routersAPI.public.wishlists.getOne(pickId)}`)
          .then((res) => {
            const wishlist: Wishlist[] = res.data.data;
            const books: Book[] = [];
            wishlist.forEach((item) => {
              const book = availableBooks.find(
                (book) => book.book_key === item._book
              );
              if (book) {
                books.push(book);
              }
            });
            setBooksInWishlist(books);
          })
          .catch(() => {
            alert("Empty Wishlist!");
          });
    },
    [availableBooks]
  );

  useEffect(() => {
    if (pickedCustomer) {
      refetch(pickedCustomer);
    }
  }, [refetch, pickedCustomer]);

  const tableClass = "border-white border-[.05vw] px-[2vw]";

  return (
    <div className="flex flex-col items-center w-full p-[1vw] h-screen overflow-clip">
      {/* Back Button */}
      <div className="flex w-full h-full">
        <div className="flex flex-col items-center w-6/12 h-full gap-[2vh] py-[5vh]">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => router.push("/")}
          >
            Go to Main
          </button>
          <div className="flex flex-col items-center h-fit">
            {/* Pick Customer */}
            <h2>Pick a Customer</h2>
            <h2>{`Current Id: ${pickedCustomer}`}</h2>
            <select
              className="w-full text-black"
              onChange={(e) => {
                setPickedCustomer(e.target.value);
              }}
            >
              <option key={"idx_start"} value="empty">
                -- Pick a Customer --
              </option>
              {customerList &&
                customerList.map((customer, idx) => (
                  <option key={idx} value={customer.customer_key}>
                    {customer.full_name}
                  </option>
                ))}
            </select>
          </div>
          <div className="flex flex-col items-center h-fit">
            {/* Customer Details */}
            <h2>Customer Details</h2>
            {pickedCustomer && (
              <div>
                {customerList
                  .filter(
                    (customer) => customer.customer_key === pickedCustomer
                  )
                  .map((customer, idx) => (
                    <div key={idx}>
                      <p>{`Full Name: ${customer.full_name}`}</p>
                      <p>{`Nickname: ${customer.nickname}`}</p>
                      <p>{`Profession: ${customer.profession}`}</p>
                      <p>{`Date Born: ${customer.date_born}`}</p>
                      <p>{`Date Death: ${customer.date_death}`}</p>
                      <p>{`Gender: ${customer.gender}`}</p>
                    </div>
                  ))}
              </div>
            )}
          </div>
          <div className="flex flex-col items-center h-fit">
            {/* Customer Wishlist */}
            <h2>Customer Wishlist</h2>
            <div className="w-full h-full overflow-y-scroll">
              {booksInWishlist && booksInWishlist.length > 0 && (
                <table className={twMerge("table-auto", tableClass)}>
                  <thead>
                    <tr>
                      <th className={tableClass}>Book Name</th>
                      <th className={tableClass}>Price</th>
                      <th className={tableClass}>Publication Year</th>
                      <th className={tableClass}>Pages</th>
                    </tr>
                  </thead>
                  <tbody>
                    {booksInWishlist.map((book, idx) => (
                      <tr key={idx}>
                        <td
                          className={tableClass + " cursor-pointer"}
                          onClick={() => {
                            axios
                              .delete(
                                routersAPI.public.wishlists.delete(
                                  pickedCustomer,
                                  book.book_key
                                )
                              )
                              .then(
                                () => {
                                  alert("Book removed from wishlist!");
                                  // refresh the page
                                  refetch(pickedCustomer);
                                },
                                () => {
                                  alert("Failed to remove book from wishlist!");
                                }
                              );
                          }}
                        >
                          {book.name}
                        </td>
                        <td className={tableClass}>{book.price}</td>
                        <td className={tableClass}>{book.publication_year}</td>
                        <td className={tableClass}>{book.pages}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center w-6/12 py-[2vh] h-full">
          {/* Get All the Available Books in a table*/}
          <h2>Available Books</h2>
          <div className="w-full h-full overflow-y-scroll">
            <table className={twMerge("table-auto", tableClass)}>
              <thead>
                <tr>
                  <th className={tableClass}>Book Name</th>
                  <th className={tableClass}>Price</th>
                  <th className={tableClass}>Publication Year</th>
                  <th className={tableClass}>Pages</th>
                </tr>
              </thead>
              <tbody>
                {availableBooks.map((book, idx) => (
                  <tr key={idx}>
                    <td
                      className={twMerge(tableClass, "cursor-pointer")}
                      onClick={() => {
                        axios
                          .post(routersAPI.public.wishlists.add, {
                            _customer: pickedCustomer,
                            _book: book.book_key
                          })
                          .then(
                            () => {
                              alert("Book added to wishlist!");
                              // refresh the page
                              refetch(pickedCustomer);
                            },
                            () => {
                              alert("Failed to add book to wishlist!");
                            }
                          );
                      }}
                    >
                      {book.name}
                    </td>
                    <td className={tableClass}>{book.price}</td>
                    <td className={tableClass}>{book.publication_year}</td>
                    <td className={tableClass}>{book.pages}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
