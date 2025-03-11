import { useMutation, useQueryClient } from "react-query";
import { updateEmployee as updateEmployeeApi } from "../../services/apiEmployees";

function useUpdateEmployee() {
  const queryClient = useQueryClient();

  const { isLoding, mutate: updateEmployee } = useMutation({
    mutationFn: ({ id, employee }) => updateEmployeeApi(id, employee),
    onSuccess: () => {
      console.log("Employee updated successfully");
      queryClient.invalidateQueries("employees");
    },
    onError: () => {
      console.log("Error updating employee");
    },
  });

  return { updateEmployee, isLoding };
}
export default useUpdateEmployee;
