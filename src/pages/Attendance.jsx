import AttendanceTable from "../components/AttendanceTable";
import DatePicker from "../components/DatePicker";
import Pagination from "../components/Pagination";

function Attendance() {
  return (
    <div className="px-10">
      <DatePicker />
      <AttendanceTable />
      <Pagination />
    </div>
  );
}

export default Attendance;
