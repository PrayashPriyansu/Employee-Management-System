import { useQuery } from "react-query";
import { getAttendanceData } from "../../services/apiAttendance";
import { format } from "date-fns";

function useReadAttendance(date) {
  const {
    data: readAttendanceData,
    isLoadingAttendance,
    isFetching,
  } = useQuery({
    queryKey: ["attendance", date],
    queryFn: () => getAttendanceData(format(date, "yyyy-MM-dd")),
  });

  return { readAttendanceData, isLoadingAttendance, isFetching };
}
export default useReadAttendance;
