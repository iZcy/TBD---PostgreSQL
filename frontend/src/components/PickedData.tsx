"use client";

import { useGlobalContext } from "./GlobalContext";

export default function PickedData() {
  const { theDataPicker, usingTable, usingInterface } = useGlobalContext();
  return (
    <div>
      <p>The Data: </p>
      {usingTable === "" ? (
        <p>Please pick a table</p>
      ) : !theDataPicker ? (
        <p>Please pick a data</p>
      ) : (
        <div className="flex flex-col gap-[1vh]">
          {theDataPicker &&
            Object.entries(theDataPicker).map((key, idx) => (
              <p key={idx + key[0]}>
                {usingInterface.headers[idx]}: {key[1]}
              </p>
            ))}
        </div>
      )}
    </div>
  );
}
