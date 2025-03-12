function Spinner({ className }) {
  return (
    <span
      className={`${className} border-4 border-gray-300 rounded-full border-t-blue-500 size-5 animate-spin`}
    ></span>
  );
}

export default Spinner;
