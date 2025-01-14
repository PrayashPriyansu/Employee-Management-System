import TableDataCell from "./TableDataCell";
import TableHeaderCell from "./TableHeaderCell";
import { motion } from "motion/react";

const tableHeaders = ["Present", "Name", "In-Time", "Out-Time", "Overtime"];

const tableData = [
  { present: true, name: "Jane Smith", inTime: "09:21", outTime: "17:23" },
  { present: false, name: "John Doe", inTime: "09:56", outTime: "17:01" },
  { present: true, name: "Jane Smith", inTime: "09:20", outTime: "17:02" },
  { present: false, name: "John Doe", inTime: "09:08", outTime: "18:47" },
  { present: true, name: "Charlie Davis", inTime: "09:33", outTime: "18:03" },
  { present: false, name: "Alice Johnson", inTime: "09:42", outTime: "18:28" },
];

function AttendanceTable() {
  return (
    <div className="relative  [&::-webkit-scrollbar]:hidden">
      <div className="max-h-[360px] overflow-x-auto overflow-y-auto rounded   [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded [&::-webkit-scrollbar-thumb]:bg-slate-400 [&::-webkit-scrollbar-track]:bg-slate-100 [&::-webkit-scrollbar-track]:rounded ">
        <motion.table layout className="min-w-full border-collapse table-fixed">
          <thead className="sticky top-0 z-10 backdrop-blur-lg">
            <tr>
              {tableHeaders.map((i, l) => (
                <TableHeaderCell key={l} data={i} />
              ))}
            </tr>
          </thead>
          <motion.tbody layout>
            {tableData.map((i, l) => (
              <TableDataCell key={l} data={i} />
            ))}
          </motion.tbody>
        </motion.table>
      </div>
    </div>
  );
}

export default AttendanceTable;
