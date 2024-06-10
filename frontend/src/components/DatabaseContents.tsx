"use client";

import Table from "@/components/Table";
import DataPicker from "@/components/DataPicker";
import PickedData from "@/components/PickedData";
import { useGlobalContext } from "@/components/GlobalContext";
import { useRouter } from "next/navigation";

export default function DatabaseContent() {
  const router = useRouter();

  const { usingData, usingInterface, dataLen } = useGlobalContext();

  return (
    <div className="flex max-lg:flex-col max-lg:items-center gap-[10vh] w-full p-[4vw] lg:h-screen">
      <div className="flex flex-col w-full lg:w-[50%] gap-[2vh] items-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-fit w-fit"
          onClick={() => router.push("/")}
        >
          Go to Main
        </button>
        {/* OPTIONS */}
        <DataPicker />
        {/* PICKED DATA */}
        <PickedData />
      </div>
      {/* TABLE DATA */}
      <div className="w-full lg:w-[50%] flex overflow-clip h-full max-lg:h-screen">
        <Table
          usingData={usingData}
          usingInterface={usingInterface}
          dataLen={dataLen}
        />
      </div>
    </div>
  );
}
