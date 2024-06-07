"use client";

import { useEffect } from "react";
import Table from "@/components/Table";
import DataPicker from "@/components/DataPicker";
import PickedData from "@/components/PickedData";
import { useGlobalContext } from "@/components/GlobalContext";

export default function TestPage() {
  const { initFunction, usingData, usingInterface, dataLen } =
    useGlobalContext();

  useEffect(() => {
    initFunction();
  }, [initFunction]);

  return (
    <div className="flex flex-col items-center gap-[10vh] w-full p-[4vw]">
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
