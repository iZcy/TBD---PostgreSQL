"use client";

import axios from "axios";
import { useEffect, useState } from "react";

// Create an interface for the JSON object as the given data
interface Transaction {
  _transaction_key: string;
  _stock: string;
  _customer: string;
  _discount: string | null;
  _employee: string;
  timestamp: string;
}

export default function TestPage() {
  // Create a state to accept a JSON object with the interface
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5555/test/transactions")
      .then((response) => {
        setTransactions(response.data as Transaction[]);
      })
      .catch((error) => {
        console.error("Error fetching transactions:", error);
        // Handle error appropriately, such as setting an error state or displaying an error message to the user.
      });
  }, []);

  // Log transactions every 5 seconds
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log(transactions);
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, [transactions]);

  return (
    <div className="flex flex-col gap-[2vh] text-white">
      {Array.isArray(transactions) &&
        transactions.map((transaction) => (
          <div
            key={transaction._transaction_key}
            className="flex flex-col gap-[1vh]"
          >
            <p>Stock: {transaction._stock}</p>
            <p>Customer: {transaction._customer}</p>
            <p>Discount: {transaction._discount}</p>
            <p>Employee: {transaction._employee}</p>
            <p>Timestamp: {transaction.timestamp}</p>
          </div>
        ))}
    </div>
  );
}
