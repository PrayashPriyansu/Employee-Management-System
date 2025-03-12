import { useEffect, useMemo, useState } from "react";
import AttendanceTable from "../components/AttendanceTable";
// import Pagination from "../components/Pagination";
import Button from "../components/ui/Button";
import useAttendance from "../feature/Attendance/useAttendance";
import useEmployees from "../feature/Employees/useEmployees";
import { format } from "date-fns";
import DatePicker from "../components/ui/DatePicker";
import useReadAttendance from "../feature/Attendance/useReadAttendance";
import Spinner from "../components/ui/Spinner";
import EditAttendance from "../components/ui/EditAttendance";

function Attendance() {
  const { isLoading, mutate } = useAttendance();
  const [date, setDate] = useState(new Date());
  const [isRecorded, setIsRecorded] = useState(false); // Track recorded state
  const [isEditOpen, setIsEditOpen] = useState(false);

  const { employees = [] } = useEmployees();

  console.log(employees);

  const { readAttendanceData, isLoadingAttendance, isFetching } =
    useReadAttendance(date);

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

  function handleOpenEdit() {
    setIsRecorded(false);
    setIsEditOpen((i) => !i);
  }

  useEffect(() => {
    setIsEditOpen(false);
    setAttendanceData(initialData);
    setIsRecorded(false); // Reset status when date changes
  }, [initialData]);

  const handleAddAttendance = () => {
    mutate(attendanceData, {
      onSuccess: () => {
        setIsEditOpen(false);
        setIsRecorded(true);
      }, // Mark attendance as recorded
    });
  };

  return (
    <div className="flex flex-col flex-1 px-10">
      <DatePicker date={date} setDate={setDate} />

      {isLoading || isLoadingAttendance || isFetching ? (
        <div className="flex items-center justify-center flex-1">
          <Spinner />
        </div>
      ) : (readAttendanceData?.length > 0 || isRecorded) && !isEditOpen ? (
        <div className="flex items-center justify-between p-3 my-4 text-green-700 bg-green-100 rounded-md">
          <p>Attendance has been recorded for {format(date, "dd MMM yyyy")}.</p>
          <Button onClick={handleOpenEdit}>Edit</Button>
        </div>
      ) : isEditOpen ? (
        <>
          <EditAttendance
            data={readAttendanceData}
            setAttendanceData={setAttendanceData}
          />
          <div className="flex items-center justify-between">
            <Button
              className="mt-4"
              onClick={handleAddAttendance}
              disabled={isLoading}
            >
              Update Attendance
            </Button>
            <Button
              className="mt-4 "
              onClick={() => setIsEditOpen(false)}
              disabled={isLoading}
            >
              Cancel
            </Button>
          </div>
        </>
      ) : (
        <>
          <AttendanceTable
            employees={employees}
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
