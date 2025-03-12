import { useMutation } from "react-query";
import { insertAttendanceData } from "../../services/apiAttendance";
import { toast } from "sonner";

function useAttendance() {
  const { isLoading, mutate } = useMutation({
    mutationFn: insertAttendanceData,
    onSuccess: () => {
      toast.success("Attendance data inserted successfully");
    },
    onError: () => {
      toast.error("Error inserting attendance data");
    },
  });

  return { mutate, isLoading };
}

export default useAttendance;
