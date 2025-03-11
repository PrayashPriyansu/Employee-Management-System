import { useQuery } from "react-query";
import { getAllUsers } from "../../services/apiUserAuth";

function useUsers() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });

  if (error) {
    console.log(error);
  }
  return {
    users: data,
    isLoading,
  };
}
export default useUsers;
