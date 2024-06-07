"use client";

import { useRouter } from "next/navigation";

export default function MainContent() {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-4xl text-center">Welcome to iZcy in TBD</h1>
      <p className="text-center">
        {"This is the Good Reading Bookstore's API (TBD Part B)"}
      </p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => router.push("/database")}
      >
        Go to Database
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => router.push("/bookstore")}
      >
        Go to Bookstore
      </button>
    </div>
  );
}
