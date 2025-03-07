import { useQuery } from "react-query";
import { getEmployeesDetails } from "../../services/apiEmployees";

function useEmployees() {
  const { data, isPending, isFetching, error } = useQuery({
    queryKey: ["employees"],
    queryFn: getEmployeesDetails,
  });

  if (error) throw new Error(error.message);
  //   console.log(data);

  const employees = data?.data;

  console.log(employees);

  return {
    employees,
    isPending,
    isFetching,
  };
}
export default useEmployees;
