import useSignout from "../../feature/Authentication/useSignout";
import Button from "./Button";

function SignOut() {
  const { signOut } = useSignout();

  return (
    <Button
      className="ml-4"
      variant="danger"
      onClick={() => {
        console.log("click");
        signOut();
      }}
    >
      Signout
    </Button>
  );
}
export default SignOut;
