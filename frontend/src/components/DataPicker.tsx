"use client";
import { useGlobalContext } from "./GlobalContext";
import { AnyListedType } from "@/configs/extras";
import { interfacesBreakdowns } from "@/configs/interfacesBreakdowns";

export default function DataPicker() {
  const {
    availableTables,
    setUsingTable,
    usingData,
    getSelfIdFunction,
    setNullFunction,
    usingIndex
  } = useGlobalContext();

  const gainValue = (obj: AnyListedType) => {
    const keyAccessor: string | undefined =
      interfacesBreakdowns[usingIndex].show;

    if (keyAccessor !== undefined) {
      const foundEntry = Object.entries(obj).find(
        ([key, value]) => key === keyAccessor
      );
      return foundEntry ? foundEntry[1] : "";
    }
    return "";
  };

  return (
    <div className="flex flex-col text-white text-center w-full items-center gap-[2vh]">
      <div className="flex flex-col w-full">
        <p>Choose Table: </p>
        <select
          className="w-full text-black"
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
      </div>
      <div className="flex flex-col w-full">
        <p>Pick Data: </p>
        <select
          className="w-full text-black"
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
              <option key={idx} value={Object.entries(obj)[0][1]}>
                {gainValue(obj)}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
}
