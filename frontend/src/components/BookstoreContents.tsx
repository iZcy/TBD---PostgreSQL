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
  const [mode, setMode] = useState<number>(0);
  const [bookName, setBookName] = useState<string | null>(null);
  const [bookPrice, setBookPrice] = useState<number | null>(null);
  const [bookPublicationYear, setBookPublicationYear] = useState<number | null>(
    null
  );
  const [bookPages, setBookPages] = useState<number | null>(null);

  const resetBook = () => {
    setBookName(null);
    setBookPrice(null);
    setBookPublicationYear(null);
    setBookPages(null);
  };

  const toggleMode = () => {
    setMode((prev) => (prev === 0 ? 1 : 0));
  };

  useEffect(() => {
    axios
      .get(routersAPI.public.customers.getFull)
      .then((res) => {
        setCustomerList(res.data.data);
      })
      .catch((error) => {
        alert("Failed to fetch customers! " + error);
      });

    axios
      .get(routersAPI.public.books.getAll)
      .then((res) => {
        setAvailableBooks(res.data.data);
      })
      .catch((error) => {
        alert("Failed to fetch books! " + error);
      });
  }, []);

  const refetchBooks = useCallback(() => {
    axios
      .get(routersAPI.public.books.getAll)
      .then((res) => {
        setAvailableBooks(res.data.data);
      })
      .catch((error) => {
        alert("Failed to fetch books! " + error);
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

  const tableClass = "border-white border-[.05vw] px-[2vw] bg-black text-white";

  return (
    <div className="flex flex-col items-center w-full p-[1vw] lg:h-screen overflow-clip">
      {/* Back Button */}
      <div className="flex w-full h-full max-lg:flex-col">
        <div className="flex flex-col items-center w-6/12 max-lg:w-full h-full gap-[2vh] py-[5vh]">
          <div className="flex w-fit justify-center gap-[1vmax]">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => router.push("/")}
            >
              Go to Main
            </button>
            {/* Mode Toggle */}
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={toggleMode}
            >
              {mode === 1 ? "Show Wishlist" : "Add Book and Wishlist"}
            </button>
          </div>
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
          {pickedCustomer && pickedCustomer !== "empty" ? (
            <>
              <div className="flex flex-col items-center h-[33%]">
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
                          <p>{`Date Death: ${
                            customer.date_death
                              ? customer.date_death
                              : "Still Alive"
                          }`}</p>
                          <p>{`Gender: ${customer.gender}`}</p>
                        </div>
                      ))}
                  </div>
                )}
              </div>
              {mode === 0 ? (
                <div className="flex flex-col items-center h-[45%]">
                  {/* Customer Wishlist */}
                  <h2>Customer Wishlist (click the name to unwishlist)</h2>
                  <div className="w-full h-full overflow-y-scroll">
                    {booksInWishlist && booksInWishlist.length > 0 && (
                      <table className={twMerge("table-auto", tableClass)}>
                        <thead>
                          <tr className={twMerge("sticky top-0", tableClass)}>
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
                                        alert(
                                          "Failed to remove book from wishlist!"
                                        );
                                      }
                                    )
                                    .catch((error) => {
                                      alert(
                                        "Failed to remove book from wishlist! " +
                                          error
                                      );
                                    });
                                }}
                              >
                                {book.name}
                              </td>
                              <td className={tableClass}>{book.price}</td>
                              <td className={tableClass}>
                                {book.publication_year}
                              </td>
                              <td className={tableClass}>{book.pages}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )}
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center h-[45%] w-full px-[2vmax] gap-[2vmax]">
                  {/* Create a template to add new book */}
                  <h2 className="text-center">Add New Book</h2>
                  <div className="w-full h-full overflow-y-scroll">
                    <div className="flex flex-col w-full">
                      <div className="flex px-[.5vmax]">
                        <p className="w-[40%]">Book Name</p>
                        <input
                          value={bookName ? bookName : ""}
                          type="text"
                          placeholder="Book Name"
                          className="w-full text-black px-[.5vmax] border-black border-[.05vmax]"
                          onChange={(e) => setBookName(e.target.value)}
                        />
                      </div>
                      <div className="flex px-[.5vmax]">
                        <p className="w-[40%]">Price</p>
                        <input
                          value={bookPrice ? bookPrice : ""}
                          type="number"
                          placeholder="Price"
                          className="w-full text-black px-[.5vmax] border-black border-[.05vmax]"
                          onChange={(e) =>
                            setBookPrice(parseInt(e.target.value))
                          }
                        />
                      </div>
                      <div className="flex px-[.5vmax]">
                        <p className="w-[40%]">Publication Year</p>
                        <input
                          value={bookPublicationYear ? bookPublicationYear : ""}
                          type="number"
                          placeholder="Publication Year"
                          className="w-full text-black px-[.5vmax] border-black border-[.05vmax]"
                          onChange={(e) =>
                            setBookPublicationYear(parseInt(e.target.value))
                          }
                        />
                      </div>
                      <div className="flex px-[.5vmax]">
                        <p className="w-[40%]">Pages</p>
                        <input
                          value={bookPages ? bookPages : ""}
                          type="number"
                          placeholder="Pages"
                          className="w-full text-black px-[.5vmax] border-black border-[.05vmax]"
                          onChange={(e) =>
                            setBookPages(parseInt(e.target.value))
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex w-fit gap-[1vmax]">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => {
                        axios
                          .post(routersAPI.public.books.add, {
                            name: bookName,
                            price: bookPrice,
                            publication_year: bookPublicationYear,
                            pages: bookPages
                          })
                          .then(() => {
                            alert("Book added!");
                            // refresh the page
                            refetchBooks();
                            resetBook();
                          })
                          .catch((error) => {
                            alert("Failed to add book! " + error);
                          });
                      }}
                    >
                      Add Book
                    </button>
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => {
                        axios
                          .post(routersAPI.public.books.makeAndWish, {
                            wishlist: {
                              _customer: pickedCustomer
                            },
                            book: {
                              name: bookName,
                              price: bookPrice,
                              publication_year: bookPublicationYear,
                              pages: bookPages
                            }
                          })
                          .then(() => {
                            alert("Book added and added to wishlist!");
                            // refresh the page
                            refetchBooks();
                            refetch(pickedCustomer);
                            resetBook();
                          })
                          .catch(() => {
                            alert("Failed to add book and wishlist!");
                          });
                      }}
                    >
                      Add Book and Add to Wishlist
                    </button>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="flex flex-col items-center h-fit">
              <h2>No Customer Picked</h2>
            </div>
          )}
        </div>
        <div className="flex flex-col items-center w-6/12 max-lg:w-full py-[2vh] h-screen lg:h-full">
          {/* Get All the Available Books in a table*/}
          <h2>Available Books (click the name to wishlist)</h2>
          <div className="w-full h-full overflow-y-scroll max-lg:flex max-lg:justify-center">
            <table className={twMerge("table-auto", tableClass)}>
              {/* Make the table head sticked */}
              <thead className={twMerge("sticky top-0", tableClass)}>
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
                          )
                          .catch((error) => {
                            alert("Failed to add book to wishlist! " + error);
                          });
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
