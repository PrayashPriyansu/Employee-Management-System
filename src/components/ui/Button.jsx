import clsx from "clsx";

const defaultStyles =
  "shadow-sm w-fit rounded-md cursor-pointer font-semibold active:scale-95 disabled:scale-100 transition duration-200 flex items-center justify-center gap-1  disabled:cursor-not-allowed";

const variantStyles = {
  primary:
    "bg-blue-100 shadow-blue-300 text-blue-800 hover:bg-blue-200 disabled:bg-gray-300 disabled:text-gray-500",
  secondary: "bg-blue-700 shadow-blue-900 text-blue-50 hover:bg-blue-800",
  danger: "bg-red-600 shadow-red-900 hover:bg-red-700 text-white",

  tertiary: "bg-blue-600 shadow-blue-800 text-blue-50  hover:bg-blue-600",
  noBg: "text-blue-950 hover:bg-blue-200 ",
};

const sizeStyles = {
  small: "px-2 py-1 text-sm",
  medium: "px-4 py-2",
  large: "px-6 py-4 text-lg ",
};

function Button({
  variant = "primary",
  disabled = false,
  onClick,
  size = "medium",
  children,
  className = "",
  type = "button",
  startIcon,
  endIcon,
  loading = false,
}) {
  console.log(loading);

  return (
    <button
      onClick={onClick}
      type={type}
      className={clsx(
        defaultStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
    >
      <span
        className={clsx("flex items-center", {
          "invisible pointer-events-none": loading,
        })}
      >
        {startIcon}
        {children}
        {endIcon}
      </span>
      {loading && (
        <span className="absolute w-4 h-4 -translate-x-1/2 -translate-y-1/2 border-2 border-black rounded-full top-1/2 left-1/2 border-t-transparent animate-spin"></span>
      )}
    </button>
  );
}

export default Button;
