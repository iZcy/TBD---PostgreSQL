"use client";

import { twMerge } from "tailwind-merge";
import { AnyListedType } from "@/configs/extras";
import { useGlobalContext } from "@/components/GlobalContext";

export default function Table() {
  const { usingData, usingInterface, dataLen } = useGlobalContext();
  const classTable: string =
    "px-[2vw] border-white border-[.2vw] tracking-wider";

  return (
    <table className="text-white">
      <thead>
        <tr>
          <th className={classTable}>No</th>
          {usingInterface &&
            Object.entries(usingInterface.headers).map((key, idx) => (
              <th key={idx} className={classTable}>
                {key[1]}
              </th>
            ))}
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
              <td className={classTable}>{idx + 1}</td>
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
  );
}
