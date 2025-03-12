import { useMutation } from "react-query";
import { signUp as signUpApi } from "../../services/apiUserAuth";
import { toast } from "sonner";

function useSignup() {
  const {
    isLoading,
    mutate: signUp,
    error,
  } = useMutation({
    mutationFn: ({ name, email, password }) => signUpApi(name, email, password),
    onSuccess: () => {
      toast.success("Authenticated user created successfully");
    },
    onError: () => {
      toast.error("Error creating user");
    },
  });

  if (error) {
    throw new Error(error.message);
  }

  return { isLoading, signUp };
}
export default useSignup;
