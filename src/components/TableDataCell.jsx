import { motion } from "motion/react";
import { useState } from "react";
function TableDataCell({ data }) {
  const [isPresent, setIsPresent] = useState(false);
  const [inTime, setInTime] = useState("08:00");
  const [outTime, setOutTime] = useState("16:00");

  const overTimeInHours = getOverTime(outTime);

  const tdStyle = `px-2 py-2 text-sm border-b text-align-top  ${
    isPresent ? "text-stone-950/80" : "text-stone-950/20"
  }`;

  function handleInTimeChange(e) {
    setInTime(e.target.value);
  }

  function handleOutTimeChange(e) {
    setOutTime(e.target.value);
  }

  function handleIsPresentChange(e) {
    setIsPresent(e.target.checked);
  }

  return (
    <tr className={`${!isPresent && " "} transition-opacity duration-[650ms] `}>
      <td className={`${tdStyle}`}>
        <input
          type="checkbox"
          name=""
          id=""
          checked={isPresent}
          onChange={handleIsPresentChange}
          className={`cursor-pointer rounded-md appearance-none transition-none active:outline-none transition-colors active:ring bg-red-200 text-black border shrink-0 focus:ring border-black checked:bg-green-200
           size-4`}
        />
      </td>
      <td
        className={`${tdStyle} font-semibold transition-opacity duration-[750ms] `}
      >
        {data.name}
      </td>

      {isPresent ? (
        <>
          <motion.td
            className={tdStyle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.75, ease: "easeInOut" }}
          >
            <div className="resize">
              <input type="time" value={inTime} onChange={handleInTimeChange} />
            </div>
          </motion.td>
          <motion.td
            className={tdStyle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.75, ease: "easeInOut" }}
          >
            <input type="time" value={outTime} onChange={handleOutTimeChange} />
          </motion.td>
          <motion.td
            className={`${tdStyle}  text-right`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.75, ease: "easeInOut" }}
          >
            {Math.floor(overTimeInHours)}
          </motion.td>
        </>
      ) : (
        <motion.td
          colSpan={3}
          className={`${tdStyle} py-[9px] font-semibold text-stone-950/20`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.75, ease: "easeInOut" }}
        >
          Absent
        </motion.td>
      )}
    </tr>
  );
}

export default TableDataCell;

function getOverTime(outTime) {
  const [outHours, outMinutes] = outTime.split(":").map((i) => parseInt(i));
  const outTimeInMins = outHours * 60 + outMinutes;

  const standEndTime = 16 * 60;

  const overTime = outTimeInMins - standEndTime;

  return overTime / 60;
}
