"use client";

import { useEffect } from "react";
import Table from "@/components/Table";
import DataPicker from "@/components/DataPicker";
import PickedData from "@/components/PickedData";
import { useGlobalContext } from "@/components/GlobalContext";
import { useRouter } from "next/navigation";

export default function TestPage() {
  const router = useRouter();

  const { usingData, usingInterface, dataLen } = useGlobalContext();

  return (
    <div className="flex flex-col items-center gap-[10vh] w-full p-[4vw]">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => router.push("/")}
      >
        Go to Main
      </button>
      <div className="flex flex-col w-[50%] gap-[2vh]">
        {/* OPTIONS */}
        <DataPicker />
        {/* PICKED DATA */}
        <PickedData />
      </div>
      {/* TABLE DATA */}

      <Table
        usingData={usingData}
        usingInterface={usingInterface}
        dataLen={dataLen}
      />
    </div>
  );
}
