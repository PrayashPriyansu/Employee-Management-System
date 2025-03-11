import { useMutation } from "react-query";
import { signOut } from "../../services/apiUserAuth";

function useSignout() {
  const { isLoading } = useMutation({
    mutationFn: signOut,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: () => {
      console.log("Error signing out");
    },
  });

  return { isLoading };
}
export default useSignout;
