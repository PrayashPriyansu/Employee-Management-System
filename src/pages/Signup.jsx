import Button from "../components/ui/Button";
import Form from "../components/ui/Form";
import Input from "../components/ui/Input";
import useSignup from "../feature/Authentication/useSignup";

function Signup() {
  const { signUp, isLoading } = useSignup();

  function handleSubmit(data) {
    signUp(data);
  }

  return (
    <div className="flex items-center justify-center flex-1 ">
      <Form onSubmit={handleSubmit} className="p-10 border-2 w-96">
        <Input
          autocomplete="userName"
          name="name"
          label="Name"
          type="text"
          required
        />
        <Input
          autocomplete="email"
          name="email"
          label="Email"
          type="email"
          required
        />
        <Input
          autocomplete="new-password"
          name="password"
          label="Password"
          type="password"
          required
        />
        <Button
          loading={isLoading}
          disabled={isLoading}
          type="primary"
          className="w-full"
        >
          Add User
        </Button>
      </Form>
    </div>
  );
}
export default Signup;
