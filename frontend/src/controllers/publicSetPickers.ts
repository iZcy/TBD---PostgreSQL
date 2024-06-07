import axios from "axios";
import { routersAPI } from "@/configs/routers";
import { Dispatch, SetStateAction } from "react";
import {
  Transaction,
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
  Writting,
  Wishlist
} from "@/configs/interfaces";

export const getPickedTransaction = (
  pickedId: string,
  setPickedTransaction: Dispatch<SetStateAction<Transaction | null>>
) => {
  pickedId &&
    axios
      .get(routersAPI.public.transactions.getOne(pickedId))
      .then((response) => {
        setPickedTransaction(response.data.data[0] as Transaction);
      })
      .catch((error) => {
        console.error("Error fetching transactions:", error);
      });
};

export const getPickedAuthor = (
  pickedId: string,
  setPickedAuthor: Dispatch<SetStateAction<Author | null>>
) => {
  pickedId &&
    axios
      .get(routersAPI.public.authors.getOne(pickedId))
      .then((response) => {
        setPickedAuthor(response.data.data[0] as Author);
      })
      .catch((error) => {
        console.error("Error fetching authors:", error);
      });
};

export const getPickedBook = (
  pickedId: string,
  setPickedBook: Dispatch<SetStateAction<Book | null>>
) => {
  pickedId &&
    axios
      .get(routersAPI.public.books.getOne(pickedId))
      .then((response) => {
        setPickedBook(response.data.data[0] as Book);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
      });
};

export const getPickedContact = (
  pickedId: string,
  setPickedContact: Dispatch<SetStateAction<Contact | null>>
) => {
  pickedId &&
    axios
      .get(routersAPI.public.contacts.getOne(pickedId))
      .then((response) => {
        setPickedContact(response.data.data[0] as Contact);
      })
      .catch((error) => {
        console.error("Error fetching contacts:", error);
      });
};

export const getPickedCustomer = (
  pickedId: string,
  setPickedCustomer: Dispatch<SetStateAction<Customer | null>>
) => {
  pickedId &&
    axios
      .get(routersAPI.public.customers.getOne(pickedId))
      .then((response) => {
        setPickedCustomer(response.data.data[0] as Customer);
      })
      .catch((error) => {
        console.error("Error fetching customers:", error);
      });
};

export const getPickedDistributor = (
  pickedId: string,
  setPickedDistributor: Dispatch<SetStateAction<Distributor | null>>
) => {
  pickedId &&
    axios
      .get(routersAPI.public.distributors.getOne(pickedId))
      .then((response) => {
        setPickedDistributor(response.data.data[0] as Distributor);
      })
      .catch((error) => {
        console.error("Error fetching distributors:", error);
      });
};

export const getPickedDiscount = (
  pickedId: string,
  setPickedDiscount: Dispatch<SetStateAction<Discount | null>>
) => {
  pickedId &&
    axios
      .get(routersAPI.public.discounts.getOne(pickedId))
      .then((response) => {
        setPickedDiscount(response.data.data[0] as Discount);
      })
      .catch((error) => {
        console.error("Error fetching discounts:", error);
      });
};

export const getPickedEmployee = (
  pickedId: string,
  setPickedEmployee: Dispatch<SetStateAction<Employee | null>>
) => {
  pickedId &&
    axios
      .get(routersAPI.public.employees.getOne(pickedId))
      .then((response) => {
        setPickedEmployee(response.data.data[0] as Employee);
      })
      .catch((error) => {
        console.error("Error fetching employees:", error);
      });
};

export const getPickedFranchise = (
  pickedId: string,
  setPickedFranchise: Dispatch<SetStateAction<Franchise | null>>
) => {
  pickedId &&
    axios
      .get(routersAPI.public.franchises.getOne(pickedId))
      .then((response) => {
        setPickedFranchise(response.data.data[0] as Franchise);
      })
      .catch((error) => {
        console.error("Error fetching franchises:", error);
      });
};

export const getPickedLocation = (
  pickedId: string,
  setPickedLocation: Dispatch<SetStateAction<Location | null>>
) => {
  pickedId &&
    axios
      .get(routersAPI.public.locations.getOne(pickedId))
      .then((response) => {
        setPickedLocation(response.data.data[0] as Location);
      })
      .catch((error) => {
        console.error("Error fetching locations:", error);
      });
};

export const getPickedPosition = (
  pickedId: string,
  setPickedPosition: Dispatch<SetStateAction<Position | null>>
) => {
  pickedId &&
    axios
      .get(routersAPI.public.positions.getOne(pickedId))
      .then((response) => {
        setPickedPosition(response.data.data[0] as Position);
      })
      .catch((error) => {
        console.error("Error fetching positions:", error);
      });
};

export const getPickedProfile = (
  pickedId: string,
  setPickedProfile: Dispatch<SetStateAction<Profile | null>>
) => {
  pickedId &&
    axios
      .get(routersAPI.public.profiles.getOne(pickedId))
      .then((response) => {
        setPickedProfile(response.data.data[0] as Profile);
      })
      .catch((error) => {
        console.error("Error fetching profiles:", error);
      });
};

export const getPickedPublisher = (
  pickedId: string,
  setPickedPublisher: Dispatch<SetStateAction<Publisher | null>>
) => {
  pickedId &&
    axios
      .get(routersAPI.public.publishers.getOne(pickedId))
      .then((response) => {
        setPickedPublisher(response.data.data[0] as Publisher);
      })
      .catch((error) => {
        console.error("Error fetching publishers:", error);
      });
};

export const getPickedStock = (
  pickedId: string,
  setPickedStock: Dispatch<SetStateAction<Stock | null>>
) => {
  pickedId &&
    axios
      .get(routersAPI.public.stocks.getOne(pickedId))
      .then((response) => {
        setPickedStock(response.data.data[0] as Stock);
      })
      .catch((error) => {
        console.error("Error fetching stocks:", error);
      });
};

export const getPickedWritting = (
  pickedId: string,
  setPickedWritting: Dispatch<SetStateAction<Writting | null>>
) => {
  pickedId &&
    axios
      .get(routersAPI.public.writtings.getOne(pickedId))
      .then((response) => {
        setPickedWritting(response.data.data[0] as Writting);
      })
      .catch((error) => {
        console.error("Error fetching writtings:", error);
      });
};

export const getPickedWishlist = (
  pickedId: string,
  setPickedWishlist: Dispatch<SetStateAction<Wishlist | null>>
) => {
  pickedId &&
    axios
      .get(routersAPI.public.wishlists.getOne(pickedId))
      .then((response) => {
        setPickedWishlist(response.data.data[0] as Wishlist);
      })
      .catch((error) => {
        console.error("Error fetching wishlists:", error);
      });
};
