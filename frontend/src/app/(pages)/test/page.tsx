"use client";

import { useEffect } from "react";
import Table from "@/components/Table";
import DataPicker from "@/components/DataPicker";
import PickedData from "@/components/PickedData";
import { useGlobalContext } from "@/components/GlobalContext";

export default function TestPage() {
  const { initFunction } = useGlobalContext();

  useEffect(() => {
    initFunction();
  }, [initFunction]);

  return (
    <div className="flex flex-col gap-[10vh]">
      {/* OPTIONS */}
      <DataPicker />
      {/* PICKED DATA */}
      <PickedData />
      {/* TABLE DATA */}
      <Table />
    </div>
  );
}
