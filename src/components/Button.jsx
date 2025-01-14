function Button({ type = "primary", children, Icon }) {
  const baseStyles = ``;

  return (
    <button className="flex flex-row items-center justify-center gap-1 px-1 bg-green-300 rounded-full w-fit">
      <Icon className="size-4 stroke-green-700 " />
      <span className="text-stone-950">{children}</span>
    </button>
  );
}

export default Button;
