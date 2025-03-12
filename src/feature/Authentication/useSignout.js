import { useMutation } from "react-query";
import { signOut } from "../../services/apiUserAuth";
import { toast } from "sonner";

function useSignout() {
  const { isLoading } = useMutation({
    mutationFn: signOut,
    onSuccess: () => {
      toast.success("Signed out successfully");
    },
    onError: () => {
      toast.error("Error signing out");
    },
  });

  return { isLoading };
}
export default useSignout;
