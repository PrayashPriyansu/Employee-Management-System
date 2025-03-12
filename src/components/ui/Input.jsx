import clsx from "clsx";

import { useFormContext } from "./Form";
import { useEffect, useState } from "react";

// import EyeCloseIcon from "../icons/EyeCloseIcon";
// import { useState } from "react";
// import EyeOpenIcon from "../icons/EyeOpenIcon";

const passwordValidation = {
  required: {
    value: true,
    message: "Password is required",
  },
  minLength: {
    value: 8,
    message: "Password must be at least 8 characters long",
  },
  maxLength: {
    value: 32,
    message: "Password cannot exceed 32 characters",
  },
  validate: {
    hasUpperCase: (value) =>
      /[A-Z]/.test(value) || "Must have at least one uppercase letter",
    hasLowerCase: (value) =>
      /[a-z]/.test(value) || "Must have at least one lowercase letter",
    hasNumber: (value) =>
      /\d/.test(value) || "Must contain at least one number",
    hasSpecialChar: (value) =>
      /[@$!%*?&]/.test(value) || "Must contain at least one special character",
  },
};

const defaultStyles =
  "w-full rounded-md border-2 border-gray-300 bg-white px-4 py-2 text-sm outline-none focus:border-blue-500 transition-all";

function Input({
  label,
  className,
  focus,
  type = "text",
  placeholder,
  id,
  autocomplete = "off",
  name,
  value,
  onChange,
  options,
  required = false,
  minLength,
  step,
  maxLength = 100,
}) {
  const inputId =
    id || name || `input-${Math.random().toString(36).substr(2, 9)}`;

  const { register, errors, setFocus } = useFormContext();

  const [selected, setSelected] = useState("");

  minLength = minLength || (required ? 1 : 0);

  // const [showPassword, setShowPassword] = useState(false);

  useEffect(
    function () {
      if (focus === true) {
        setFocus(name);
      }
    },
    [setFocus, name, focus]
  );

  return (
    <div className="relative w-full">
      {label && (
        <label
          htmlFor={inputId}
          className={clsx(
            "absolute left-4 text-gray-500 transition-all  peer-focus:text-blue-500 top-[-7px] text-xs bg-white px-1 "
          )}
        >
          {label}
        </label>
      )}

      {type === "options" ? (
        <select
          id={inputId}
          className={clsx(
            "max-h-40 ",
            selected === "" ? "text-gray-500" : "text-black",
            defaultStyles,

            className,
            errors[name] && "border-red-500",
            label && "pt-4"
          )}
          {...register(name, {
            required: required ? `${label || name} is required` : false,
            onChange(event) {
              setSelected(event.target.value);
            },
          })}
        >
          <option value="" className="text-gray-500">
            Select an option
          </option>
          {options?.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className="text-black"
            >
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          step={step}
          id={inputId}
          type={type}
          value={value}
          onChange={onChange}
          autoComplete={autocomplete}
          // type={type !== "password" ? type : showPassword ? "text" : "password"}
          placeholder={placeholder}
          required={required}
          className={clsx(defaultStyles, className, "peer", {
            "pt-4": label,
          })}
          {...register(
            name,

            type === "password"
              ? passwordValidation
              : {
                  required: required
                    ? `${
                        name.slice(0, 1).toUpperCase() + name.slice(1)
                      } is required`
                    : false,
                  maxLength: {
                    value: maxLength,
                    message: `Max length is ${maxLength}`,
                  },
                  minLength: {
                    value: minLength,
                    message: `Min length is ${minLength}`,
                  },
                }
          )}
        />
      )}
      {errors[name] ? (
        <p className="text-xs text-red-500 ">{errors[name]?.message}</p>
      ) : (
        <p className="text-xs text-red-500 ">{"\u00A0"}</p>
      )}
      {/* {type === "password" && (
        <div className="absolute text-gray-500 -translate-y-1/2 right-4 top-1/2 peer-focus:text-blue-500">
          {showPassword ? (
            <button onClick={() => setShowPassword(false)}>
              <EyeCloseIcon className="transition duration-200 rounded-full cursor-pointer group-hover:rotate-90" />
            </button>
          ) : (
            <button onClick={() => setShowPassword(true)}>
              <EyeOpenIcon className="transition duration-200 rounded-full cursor-pointer group-hover:rotate-90" />
            </button>
          )}
        </div>
      )} */}
    </div>
  );
}

export default Input;
