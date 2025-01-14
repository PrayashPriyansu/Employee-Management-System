function Pagination() {
  return (
    <div className="flex mt-1">
      <button
        disabled
        className="px-2 py-0.5 flex items-center justify-center text-sm font-medium rounded-md shadow disabled:cursor-not-allowed disabled:opacity-50 text-stone-500 bg-stone-200"
      >
        Prev
      </button>
      <div className="flex-1">
        <button></button>
      </div>
      <button className="px-2 py-0.5 text-sm font-medium flex items-center justify-center rounded-md shadow disabled:opacity-50 text-stone-500 bg-stone-200">
        Next
      </button>
    </div>
  );
}

export default Pagination;
