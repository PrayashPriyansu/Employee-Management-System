import { useQuery } from "react-query";
import { getCurrentUser } from "../../services/apiUserAuth";

function useUser() {
  const {
    isPending: isLoading,
    isFetching,
    data: user,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  return {
    isFetching,
    user,
    isLoading,
    isAuthenticated: user?.role === "authenticated",
  };
}
export default useUser;
