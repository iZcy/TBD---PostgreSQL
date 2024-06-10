"use client";

import { twMerge } from "tailwind-merge";
import { AnyListedType } from "@/configs/extras";
import { useGlobalContext } from "@/components/GlobalContext";
import { useEffect, useState } from "react";

export default function Table({
  usingData,
  usingInterface,
  dataLen
}: {
  usingData: AnyListedType[];
  usingInterface: {
    name: string;
    headers: string[];
  };
  dataLen: number;
}) {
  // const { usingData, usingInterface, dataLen } = useGlobalContext();
  const classTable: string =
    "px-[2vw] border-white border-[.2vw] tracking-wider text-white bg-black";

  const [lenData, setLenData] = useState<number>(0);

  useEffect(() => {
    if (usingData) setLenData(usingData.length);
  }, [usingData]);

  // Format numbers into the greatest digit as much as the length of the data, ex. if the max data is 192, then the format will be 3 digits
  const formatNumber = (num: number, len: number): string => {
    // divide the number by 10 and count how many times it can be divided
    let count: number = 0;
    let temp: number = num;
    for (count = 0; temp >= 1; count++) {
      temp = temp / 10;
    }
    const diff: number = len - count;
    let result: string = "";
    const numStr: string = num.toString();
    for (let i = 0; i < diff; i++) {
      result += "0";
    }
    result += numStr;

    return result;
  };

  return (
    <div className="w-full h-full overflow-scroll px-[2vw]">
      {!usingInterface && (
        <div className="w-full h-full flex flex-col items-center justify-center text-white">
          <p>{"Please select a table to view the data."}</p>
        </div>
      )}
      <table className="text-white">
        <thead>
          <tr className={usingInterface && twMerge("sticky top-0", classTable)}>
            {usingInterface && (
              <>
                <th className={classTable}>No</th>
                {Object.entries(usingInterface.headers).map((key, idx) => (
                  <th key={idx} className={classTable}>
                    {key[1]}
                  </th>
                ))}
              </>
            )}
          </tr>
        </thead>
        <tbody className="gap-[5vh]">
          {usingData && usingData.length === 0 ? (
            <tr>
              <td
                colSpan={dataLen + 1}
                className={twMerge("col-span-full", classTable, "text-center")}
              >
                Waiting for Process...
              </td>
            </tr>
          ) : (
            usingData &&
            usingData.map((obj: AnyListedType, idx: number) => (
              <tr key={"no_" + idx}>
                <td className={classTable}>{formatNumber(idx + 1, 3)}</td>
                {Object.entries(obj).map(([key, value]) => (
                  <td key={key} className={classTable}>
                    {value}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
