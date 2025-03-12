import { useMutation } from "react-query";
import { signOut as signOutApi } from "../../services/apiUserAuth";
import { toast } from "sonner";

function useSignout() {
  const { isLoading, mutate: signOut } = useMutation({
    mutationFn: signOutApi,
    onSuccess: () => {
      toast.success("Signed out successfully");
      window.location.reload();
    },
    onError: () => {
      toast.error("Error signing out");
    },
  });

  return { isLoading, signOut };
}
export default useSignout;
