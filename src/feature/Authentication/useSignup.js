import { useMutation } from "react-query";
import { signUp as signUpApi } from "../../services/apiUserAuth";

function useSignup() {
  const {
    isLoading,
    mutate: signUp,
    error,
  } = useMutation({
    mutationFn: ({ name, email, password }) => signUpApi(name, email, password),
    onSuccess: () => {
      console.log("Signup Success");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  if (error) {
    console.log(error);
  }

  return { isLoading, signUp };
}
export default useSignup;
