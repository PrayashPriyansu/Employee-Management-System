import { useEffect, useMemo, useState } from "react";
import AttendanceTable from "../components/AttendanceTable";
// import Pagination from "../components/Pagination";
import Button from "../components/ui/Button";
import useAttendance from "../feature/Attendance/useAttendance";
import useEmployees from "../feature/Employees/useEmployees";
import { format } from "date-fns";
import DatePicker from "../components/ui/DatePicker";

function Attendance() {
  const { isLoading, mutate } = useAttendance();
  const [date, setDate] = useState(new Date());
  const [isRecorded, setIsRecorded] = useState(false); // Track recorded state

  const { employees = [] } = useEmployees();

  const initialData = useMemo(() => {
    return employees.map((employee) => ({
      present: false,
      emp_id: employee.id,
      in_time: null,
      out_time: null,
      total_hours: null,
      overtime: null,
      attendance_date: format(date, "yyyy-MM-dd"),
    }));
  }, [employees, date]);

  const [attendanceData, setAttendanceData] = useState(initialData);

  useEffect(() => {
    setAttendanceData(initialData);
    setIsRecorded(false); // Reset status when date changes
  }, [initialData]);

  const handleAddAttendance = () => {
    mutate(attendanceData, {
      onSuccess: () => setIsRecorded(true), // Mark attendance as recorded
    });
  };

  return (
    <div className="px-10">
      <DatePicker date={date} setDate={setDate} />

      {isRecorded ? (
        <div className="flex items-center justify-between p-3 my-4 text-green-700 bg-green-100 rounded-md">
          <p>Attendance has been recorded for {format(date, "dd MMM yyyy")}.</p>
          <Button onClick={() => setIsRecorded(false)}>Edit</Button>
        </div>
      ) : (
        <>
          <AttendanceTable
            employees={employees}
            attendanceData={attendanceData}
            setAttendanceData={setAttendanceData}
          />
          <Button
            className="w-full mt-4"
            onClick={handleAddAttendance}
            disabled={isLoading}
          >
            Add Attendance
          </Button>
        </>
      )}

      {/* <Pagination /> */}
    </div>
  );
}

export default Attendance;
