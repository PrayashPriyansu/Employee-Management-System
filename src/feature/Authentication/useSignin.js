import { useMutation } from "react-query";
import { signIn as signInApi } from "../../services/apiUserAuth";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

function useSignin() {
  const navigate = useNavigate();

  const { mutate: signIn, isLoading } = useMutation({
    mutationFn: ({ email, password }) => signInApi(email, password),
    onSuccess: () => {
      toast.success("Signed in successfully");
      navigate("/");
    },
    onError: () => {
      toast.error("Sign in failure");
    },
  });

  return { isLoading, signIn };
}
export default useSignin;
