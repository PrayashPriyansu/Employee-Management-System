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

function AttendanceTable({ setAttendanceData, employees }) {
  return (
    <table className="w-full overflow-x-auto border-collapse table-fixed">
      <thead>
        <tr className="sticky top-0 z-10 bg-white">
          {tableHeaders.map((header, index) => (
            <TableHeaderCell key={index} data={header} />
          ))}
        </tr>
      </thead>
      <tbody>
        {employees.map((data) => {
          return (
            <TableDataCell
              key={data.id}
              name={data.name}
              emp_id={data.id}
              attendanceData={data}
              setAttendanceData={setAttendanceData}
            />
          );
        })}
      </tbody>
    </table>
  );
}

export default AttendanceTable;
