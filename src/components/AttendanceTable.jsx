import TableDataCell from "./TableDataCell";
import TableHeaderCell from "./TableHeaderCell";

const tableHeaders = [
  "Present",
  "Name",
  "In-Time",
  "Out-Time",
  "Total Hours",
  "Overtime",
];

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
    <table className="w-full overflow-x-auto border-collapse table-fixed">
      <tr className="sticky top-0 z-10 bg-white">
        {tableHeaders.map((header, index) => (
          <TableHeaderCell key={index} data={header} />
        ))}
      </tr>
      <tbody>
        {tableData.map((data, index) => (
          <TableDataCell key={index} data={data} />
        ))}
      </tbody>
    </table>
  );
}

export default AttendanceTable;
