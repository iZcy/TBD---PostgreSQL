export const domain =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5555"
    : "https://tbd-api.izcy.tech";
export const routersAPI = {
  test: {
    transactions: {
      getAll: `${domain}/test/transactions`,
      getOne: (id: string) => `${domain}/test/transactions/${id}`
    }
  },
  public: {
    authors: {
      getAll: `${domain}/authors`,
      getOne: (id: string) => `${domain}/authors/${id}`
    },
    books: {
      getAll: `${domain}/books`,
      getOne: (id: string) => `${domain}/books/${id}`
    },
    contacts: {
      getAll: `${domain}/contacts`,
      getOne: (id: string) => `${domain}/contacts/${id}`
    },
    customers: {
      getAll: `${domain}/customers`,
      getOne: (id: string) => `${domain}/customers/${id}`
    },
    distributors: {
      getAll: `${domain}/distributors`,
      getOne: (id: string) => `${domain}/distributors/${id}`
    },
    discounts: {
      getAll: `${domain}/discounts`,
      getOne: (id: string) => `${domain}/discounts/${id}`
    },
    employees: {
      getAll: `${domain}/employees`,
      getOne: (id: string) => `${domain}/employees/${id}`
    },
    franchises: {
      getAll: `${domain}/franchises`,
      getOne: (id: string) => `${domain}/franchises/${id}`
    },
    locations: {
      getAll: `${domain}/locations`,
      getOne: (id: string) => `${domain}/locations/${id}`
    },
    positions: {
      getAll: `${domain}/positions`,
      getOne: (id: string) => `${domain}/positions/${id}`
    },
    profiles: {
      getAll: `${domain}/profiles`,
      getOne: (id: string) => `${domain}/profiles/${id}`
    },
    publishers: {
      getAll: `${domain}/publishers`,
      getOne: (id: string) => `${domain}/publishers/${id}`
    },
    stocks: {
      getAll: `${domain}/stocks`,
      getOne: (id: string) => `${domain}/stocks/${id}`
    },
    transactions: {
      getAll: `${domain}/transactions`,
      getOne: (id: string) => `${domain}/transactions/${id}`
    },
    writtings: {
      getAll: `${domain}/writtings`,
      getOne: (id: string) => `${domain}/writtings/${id}`
    },
    wishlists: {
      getAll: `${domain}/wishlists`,
      getOne: (id: string) => `${domain}/wishlists/${id}`
    }
  }
};
