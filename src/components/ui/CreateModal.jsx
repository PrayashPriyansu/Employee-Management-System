import Modal from "./Modal";
import Form from "./Form";
import Input from "./Input";
import Button from "./Button";
import useAddEmployee from "../../feature/Employees/useAddEmployees";

function CreateModal({ isOpen, handleClose }) {
  const { addEmployee } = useAddEmployee(handleClose);

  function handleSubmit(data) {
    addEmployee(data);
  }

  return (
    <Modal heading="Add Employee" isOpen={isOpen} handleClose={handleClose}>
      <Form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <Input
          name="name"
          focus={true}
          placeholder="Enter Name"
          label="Name"
          type="text"
          required
        />
        <Input
          name="phone"
          minLength={10}
          maxLength={10}
          placeholder="Enter Phone Number"
          label="Phone Number"
          type="text"
          required
        />
        <Input
          name="address"
          label="Address"
          type="text"
          placeholder="Enter Address"
        />
        <Input
          name="hourly_rate"
          label="Hourly Rate"
          type="number"
          step={0.01}
          placeholder="Enter Hourly Rate (in Rupees)"
          required
        />
        <Button className="w-full" variant="primary" type="submit">
          Add Employee
        </Button>
      </Form>
    </Modal>
  );
}
export default CreateModal;
