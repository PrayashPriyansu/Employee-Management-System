import { useState } from "react";

import Td from "./Td";
function TableDataCell({ data }) {
  const [isPresent, setIsPresent] = useState(data.present);
  const [inTime, setInTime] = useState("08:00");
  const [outTime, setOutTime] = useState("16:00");

  let [inHours, inMinutes] = inTime.split(":").map((i) => parseInt(i));
  const [outHours, outMinutes] = outTime.split(":").map((i) => parseInt(i));

  if (inHours === 8 && inMinutes <= 30) {
    inMinutes = 0;
  }

  const inTimeInMins = inHours * 60 + inMinutes;
  const outTimeInMins = outHours * 60 + outMinutes;

  const totalTimeInMins = outTimeInMins - inTimeInMins;

  const overTime = totalTimeInMins - 480;

  return (
    <tr className="border-b border-stone-200">
      <td className="p-2 text-center">
        <input
          checked={isPresent}
          onChange={() => setIsPresent(!isPresent)}
          className="text-black transition-all duration-200 bg-red-400 border-black rounded-md appearance-none cursor-pointer size-4 active:outline-none active:ring shrink-0 focus:ring ring-gray-500 checked:bg-green-400 hover:ring"
          type="checkbox"
        />
      </td>
      <Td
        className={`font-semibold text-left duration-200 transition-colors ${
          !isPresent && "text-stone-950/40"
        }`}
      >
        {data.name}
      </Td>
      {isPresent ? (
        <>
          <Td className="">
            <input
              type="time"
              value={inTime}
              onChange={(e) => {
                setInTime(e.target.value);
              }}
            />
          </Td>
          <Td className="">
            <input
              type="time"
              value={outTime}
              onChange={(e) => {
                setOutTime(e.target.value);
              }}
            />
          </Td>
          <Td className={`${overTime < 0 ? "text-red-500" : ""}`}>
            {Math.floor(totalTimeInMins / 60)} hrs {""}
            {totalTimeInMins % 60} mins
          </Td>
          <Td className="">
            {overTime < 30 ? (
              <span className="font-semibold">None</span>
            ) : (
              <>
                {Math.floor(overTime / 60) > 0 &&
                  `${Math.floor(overTime / 60)} hrs `}
                {overTime % 60 > 0 && `${overTime % 60} mins`}
              </>
            )}
          </Td>
        </>
      ) : (
        <Td absent={true} colSpan={3} className="text-center text-stone-950/40">
          Absent
        </Td>
      )}
    </tr>
  );
}
export default TableDataCell;
