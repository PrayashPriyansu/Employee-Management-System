import { useMutation } from "react-query";
import { insertAttendanceData } from "../../services/apiAttendance";

function useAttendance() {
  const { isLoading, mutate } = useMutation({
    mutationFn: insertAttendanceData,
    onSuccess: () => {
      console.log("Attendance data inserted successfully");
    },
    onError: () => {
      console.log("Error inserting attendance data");
    },
  });

  return { mutate, isLoading };
}

export default useAttendance;
