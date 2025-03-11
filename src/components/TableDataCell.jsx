import { useEffect, useState } from "react";

import Td from "./Td";
function TableDataCell({ name, emp_id, setAttendanceData }) {
  const [isPresent, setIsPresent] = useState(false);
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

  const totalHours =
    totalTimeInMins / 60 - Math.floor(totalTimeInMins / 60) >= 0.5
      ? Math.floor(totalTimeInMins / 60) + 0.5
      : Math.floor(totalTimeInMins / 60);

  const overTimeHours =
    overTime / 60 - Math.floor(overTime / 60) >= 0.5
      ? Math.floor(overTime / 60) + 0.5
      : Math.floor(overTime / 60);

  useEffect(() => {
    setAttendanceData((prevData) => {
      return prevData.map((entry) => {
        if (entry.emp_id === emp_id) {
          return {
            ...entry,
            present: isPresent,
            in_time: inTime,
            out_time: outTime,
            total_hours: totalHours,
            overtime: overTimeHours,
          };
        }
        return entry;
      });
    });
  }, [
    isPresent,
    inTime,
    emp_id,
    outTime,
    name,
    setAttendanceData,
    overTimeHours,
    totalHours,
  ]);

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
        {name}
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
