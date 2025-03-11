import { useMutation, useQueryClient } from "react-query";
import { deleteEmployee as deleteEmployeeApi } from "../../services/apiEmployees";
import { toast } from "sonner";

function useDeleteEmployee() {
  const queryClient = useQueryClient();
  const { isLoading: isLoadingDelete, mutate: deleteEmployee } = useMutation({
    mutationFn: deleteEmployeeApi,
    onSuccess: () => {
      toast.success("Employee deleted successfully");
      queryClient.invalidateQueries("employees");
    },
    onError: () => {
      toast.error("Error deleting employee");
    },
  });

  return { isLoadingDelete, deleteEmployee };
}
export default useDeleteEmployee;
