import Button from "../components/ui/Button";
import Form from "../components/ui/Form";
import Input from "../components/ui/Input";
import useSignin from "../feature/Authentication/useSignin";

function Signin() {
  const { isLoading, signIn } = useSignin();

  function handleSubmit(data) {
    signIn({ email: data.email, password: data.password });
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 p-10 border-2 rounded-lg w-96 "
      >
        <h1 className="text-2xl font-semibold">Sign In</h1>
        <Input
          autocomplete="email"
          name="email"
          label="Email"
          type="email"
          required
        />
        <Input
          autocomplete="current-password"
          name="password"
          label="Password"
          type="password"
          required
        />
        <Button
          loading={isLoading}
          type="primary"
          className="w-full"
          disabled={isLoading}
        >
          Sign In
        </Button>
      </Form>
    </div>
  );
}
export default Signin;
