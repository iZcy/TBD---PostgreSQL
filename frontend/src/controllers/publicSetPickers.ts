import axios from "axios";
import { routersAPI } from "@/configs/routers";
import { Dispatch, SetStateAction } from "react";
import { Transaction } from "@/configs/interfaces";

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
