import Button from "../components/ui/Button";
import Form from "../components/ui/Form";
import Input from "../components/ui/Input";

function Receipt() {
  function handleSubmit(e) {
    e.preventDefault();

    console.log();
  }

  return (
    <div className="flex items-center justify-center flex-1 ">
      <Form onSubmit={handleSubmit} className="p-10 border-2 w-96">
        <Input name="name" label="Name" type="text" required />
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
        <Button type="primary" className="w-full">
          Add User
        </Button>
      </Form>
    </div>
  );
}
export default Receipt;
