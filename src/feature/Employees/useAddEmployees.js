import { useMutation, useQueryClient } from "react-query";
import { addEmployee as addEmployeeApi } from "../../services/apiEmployees";
import { toast } from "sonner";

function useAddEmployee(handleClose) {
  const queryClient = useQueryClient();

  const { isLoading, mutate } = useMutation({
    mutationFn: addEmployeeApi,
    onSuccess: () => {
      handleClose();
      toast.success("Employee added successfully");
      queryClient.invalidateQueries("employees");
    },
    onError: () => {
      toast.error("Error adding employee");
    },
  });

  const addEmployee = (employee) => {
    mutate(employee);
  };

  return { isLoading, addEmployee };
}

export default useAddEmployee;
