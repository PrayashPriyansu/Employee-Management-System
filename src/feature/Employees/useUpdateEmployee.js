import { useMutation, useQueryClient } from "react-query";
import { updateEmployee as updateEmployeeApi } from "../../services/apiEmployees";
import { toast } from "sonner";

function useUpdateEmployee(handleClose) {
  const queryClient = useQueryClient();

  const { isLoading, mutate: updateEmployee } = useMutation({
    mutationFn: ({ id, employee }) => updateEmployeeApi(id, employee),
    onSuccess: () => {
      toast.success("Employee updated successfully");
      handleClose();
      queryClient.invalidateQueries("employees");
    },
    onError: () => {
      toast.error("Error updating employee");
    },
  });

  return { updateEmployee, isLoading };
}
export default useUpdateEmployee;
