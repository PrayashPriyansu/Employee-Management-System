import TableDataCell from "../TableDataCell";
import TableHeaderCell from "../TableHeaderCell";

const tableHeaders = [
  "Present",
  "Name",
  "In-Time",
  "Out-Time",
  "Total Hours",
  "Overtime",
];

function EditAttendance({ data: attendanceData, setAttendanceData }) {
  console.log(attendanceData);
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse table-fixed">
        <thead>
          <tr>
            {tableHeaders.map((header) => {
              return (
                <TableHeaderCell
                  key={header}
                  data={header}
                  setAttendanceData={setAttendanceData}
                />
              );
            })}
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((entry) => {
            return (
              <TableDataCell
                key={entry.emp_id}
                data={entry}
                name={entry.employees.name}
                emp_id={entry.emp_id}
                setAttendanceData={setAttendanceData}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default EditAttendance;
