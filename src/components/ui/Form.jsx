import { useForm } from "react-hook-form";
import { createContext, useContext } from "react";

const FormContext = createContext(undefined);
function Form({ children, data, onSubmit, className, ...props }) {
  const {
    handleSubmit,
    register,
    reset,
    setFocus,
    formState: { errors },
  } = useForm({
    defaultValues: data
      ? {
          name: data.name,
          phone: data.phone,
          address: data.address,
          rate: data.hourly_rate,
        }
      : undefined,
  });

  return (
    <form className={className} onSubmit={handleSubmit(onSubmit)} {...props}>
      <FormContext.Provider value={{ register, errors, reset, setFocus }}>
        {children}
      </FormContext.Provider>
    </form>
  );
}

export function useFormContext() {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormRegister must be used within a Form");
  }
  return context;
}

export default Form;
