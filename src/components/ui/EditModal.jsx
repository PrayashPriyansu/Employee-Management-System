import Modal from "./Modal";
import Form from "./Form";
import Input from "./Input";
import Button from "./Button";
import useUpdateEmployee from "../../feature/Employees/useUpdateEmployee";

function EditModal({ isOpen, handleClose, employeeData }) {
  const { updateEmployee } = useUpdateEmployee();

  function handleSubmit(data) {
    const newData = {
      hourly_rate: data.rate,
      name: data.name,
      phone: data.phone,
    };
    updateEmployee({ id: employeeData.id, employee: newData });
  }

  return (
    <Modal heading="Edit Employee" isOpen={isOpen} handleClose={handleClose}>
      <Form
        className="flex flex-col gap-4"
        data={employeeData}
        onSubmit={handleSubmit}
      >
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
          name="rate"
          label="Hourly Rate"
          type="number"
          step={0.01}
          placeholder="Enter Hourly Rate (in Rupees)"
          required
        />
        <Button className="w-full" variant="primary" type="submit">
          Edit Employee
        </Button>
      </Form>
    </Modal>
  );
}
export default EditModal;
