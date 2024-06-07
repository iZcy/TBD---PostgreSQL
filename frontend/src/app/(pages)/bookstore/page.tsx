"use client";

import { useRouter } from "next/navigation";

export default function Bookstore() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center gap-[10vh] w-full p-[4vw]">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => router.push("/")}
      >
        Go to Main
      </button>
    </div>
  );
}
