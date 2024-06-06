import axios from "axios";
import { Transaction } from "@/configs/interfaces";
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
