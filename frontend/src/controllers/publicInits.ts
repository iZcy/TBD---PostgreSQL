import axios from "axios";
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
import { routersAPI } from "@/configs/routers";
import { Dispatch, SetStateAction } from "react";

export const initTransaction = (
  setTransactions: Dispatch<SetStateAction<Transaction[]>>
) => {
  axios
    .get(routersAPI.public.transactions.getAll)
    .then((response) => {
      setTransactions(response.data.data as Transaction[]);
    })
    .catch((error) => {
      console.error("Error fetching transactions:", error);
    });
};

export const initAuthor = (setAuthors: Dispatch<SetStateAction<Author[]>>) => {
  axios
    .get(routersAPI.public.authors.getAll)
    .then((response) => {
      setAuthors(response.data.data as Author[]);
    })
    .catch((error) => {
      console.error("Error fetching authors:", error);
    });
};

export const initBook = (setBooks: Dispatch<SetStateAction<Book[]>>) => {
  axios
    .get(routersAPI.public.books.getAll)
    .then((response) => {
      setBooks(response.data.data as Book[]);
    })
    .catch((error) => {
      console.error("Error fetching books:", error);
    });
};

export const initContact = (
  setContacts: Dispatch<SetStateAction<Contact[]>>
) => {
  axios
    .get(routersAPI.public.contacts.getAll)
    .then((response) => {
      setContacts(response.data.data as Contact[]);
    })
    .catch((error) => {
      console.error("Error fetching contacts:", error);
    });
};

export const initCustomer = (
  setCustomers: Dispatch<SetStateAction<Customer[]>>
) => {
  axios
    .get(routersAPI.public.customers.getAll)
    .then((response) => {
      setCustomers(response.data.data as Customer[]);
    })
    .catch((error) => {
      console.error("Error fetching customers:", error);
    });
};

export const initDistributor = (
  setDistributors: Dispatch<SetStateAction<Distributor[]>>
) => {
  axios
    .get(routersAPI.public.distributors.getAll)
    .then((response) => {
      setDistributors(response.data.data as Distributor[]);
    })
    .catch((error) => {
      console.error("Error fetching distributors:", error);
    });
};

export const initDiscount = (
  setDiscounts: Dispatch<SetStateAction<Discount[]>>
) => {
  axios
    .get(routersAPI.public.discounts.getAll)
    .then((response) => {
      setDiscounts(response.data.data as Discount[]);
    })
    .catch((error) => {
      console.error("Error fetching discounts:", error);
    });
};

export const initEmployee = (
  setEmployees: Dispatch<SetStateAction<Employee[]>>
) => {
  axios
    .get(routersAPI.public.employees.getAll)
    .then((response) => {
      setEmployees(response.data.data as Employee[]);
    })
    .catch((error) => {
      console.error("Error fetching employees:", error);
    });
};

export const initFranchise = (
  setFranchises: Dispatch<SetStateAction<Franchise[]>>
) => {
  axios
    .get(routersAPI.public.franchises.getAll)
    .then((response) => {
      setFranchises(response.data.data as Franchise[]);
    })
    .catch((error) => {
      console.error("Error fetching franchises:", error);
    });
};

export const initLocation = (
  setLocations: Dispatch<SetStateAction<Location[]>>
) => {
  axios
    .get(routersAPI.public.locations.getAll)
    .then((response) => {
      setLocations(response.data.data as Location[]);
    })
    .catch((error) => {
      console.error("Error fetching locations:", error);
    });
};

export const initPosition = (
  setPositions: Dispatch<SetStateAction<Position[]>>
) => {
  axios
    .get(routersAPI.public.positions.getAll)
    .then((response) => {
      setPositions(response.data.data as Position[]);
    })
    .catch((error) => {
      console.error("Error fetching positions:", error);
    });
};

export const initProfile = (
  setProfiles: Dispatch<SetStateAction<Profile[]>>
) => {
  axios
    .get(routersAPI.public.profiles.getAll)
    .then((response) => {
      setProfiles(response.data.data as Profile[]);
    })
    .catch((error) => {
      console.error("Error fetching profiles:", error);
    });
};

export const initPublisher = (
  setPublishers: Dispatch<SetStateAction<Publisher[]>>
) => {
  axios
    .get(routersAPI.public.publishers.getAll)
    .then((response) => {
      setPublishers(response.data.data as Publisher[]);
    })
    .catch((error) => {
      console.error("Error fetching publishers:", error);
    });
};

export const initStock = (setStocks: Dispatch<SetStateAction<Stock[]>>) => {
  axios
    .get(routersAPI.public.stocks.getAll)
    .then((response) => {
      setStocks(response.data.data as Stock[]);
    })
    .catch((error) => {
      console.error("Error fetching stocks:", error);
    });
};

export const initWritting = (
  setWrittings: Dispatch<SetStateAction<Writting[]>>
) => {
  axios
    .get(routersAPI.public.writtings.getAll)
    .then((response) => {
      setWrittings(response.data.data as Writting[]);
    })
    .catch((error) => {
      console.error("Error fetching writtings:", error);
    });
};

export const initWishlist = (
  setWishlists: Dispatch<SetStateAction<Wishlist[]>>
) => {
  axios
    .get(routersAPI.public.wishlists.getAll)
    .then((response) => {
      setWishlists(response.data.data as Wishlist[]);
    })
    .catch((error) => {
      console.error("Error fetching wishlists:", error);
    });
};
