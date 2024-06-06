export const domain = "http://localhost:5555";
export const routersAPI = {
  test: {
    transactions: {
      getAll: `${domain}/test/transactions`,
      getOne: (id: string) => `${domain}/test/transactions/${id}`
    }
  },
  public: {
    transactions: {
      getAll: `${domain}/transactions`,
      getOne: (id: string) => `${domain}/transactions/${id}`
    }
  }
};
