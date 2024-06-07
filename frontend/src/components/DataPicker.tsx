"use client";
import { useGlobalContext } from "./GlobalContext";
import { AnyListedType } from "@/configs/extras";

export default function DataPicker() {
  const {
    availableTables,
    setUsingTable,
    usingData,
    getSelfIdFunction,
    setNullFunction
  } = useGlobalContext();

  return (
    <div className="flex flex-col gap-[5vh] text-white">
      <p>Choose Table: </p>
      <select
        className="w-[50vw] text-black"
        onChange={(e) => {
          const value: string = e.target.value;
          setUsingTable(value);
        }}
      >
        <option key={"_"} value={""}>
          Pick a table
        </option>
        {availableTables.map((table, idx) => (
          <option key={idx} value={table}>
            {table}
          </option>
        ))}
      </select>
      <p>Pick Data: </p>
      <select
        className="w-[50vw] text-black"
        // Get self value and pass it to the function
        onChange={(e) => {
          const value: string = e.target.value;
          if (value !== "undefined") getSelfIdFunction(e.target.value);
          else setNullFunction();
        }}
      >
        <option key={"_"} value={"undefined"}>
          Pick a transaction
        </option>
        {usingData &&
          usingData.map((obj: AnyListedType, idx: number) => (
            <option
              key={idx}
              value={
                // parse obj into array and get the first element
                Object.entries(obj)[0][1]
              }
            >
              {Object.entries(obj)[0][1]}
            </option>
          ))}
      </select>
    </div>
  );
}
