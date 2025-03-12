import { useQuery } from "react-query";
import { getAllUsers } from "../../services/apiUserAuth";

function useUsers() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });

  if (error) {
    throw new Error(error.message);
  }
  return {
    users: data,
    isLoading,
  };
}
export default useUsers;
