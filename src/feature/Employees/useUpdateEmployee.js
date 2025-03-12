import { useMutation, useQueryClient } from "react-query";
import { updateEmployee as updateEmployeeApi } from "../../services/apiEmployees";
import { toast } from "sonner";

function useUpdateEmployee() {
  const queryClient = useQueryClient();

  const { isLoding, mutate: updateEmployee } = useMutation({
    mutationFn: ({ id, employee }) => updateEmployeeApi(id, employee),
    onSuccess: () => {
      toast.success("Employee updated successfully");
      queryClient.invalidateQueries("employees");
    },
    onError: () => {
      toast.error("Error updating employee");
    },
  });

  return { updateEmployee, isLoding };
}
export default useUpdateEmployee;
