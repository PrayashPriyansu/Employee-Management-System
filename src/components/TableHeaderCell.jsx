function TableHeaderCell({ data }) {
  return (
    <th className="px-2 py-1 text-xs font-semibold text-left w-fit bg-stone-200 backdrop-blur-lg text-stone-500 last-of-type:text-right">
      {data}
    </th>
  );
}

export default TableHeaderCell;
