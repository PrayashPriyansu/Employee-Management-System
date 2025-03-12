function TableHeaderCell({ data }) {
  return (
    <th className="px-2 py-1 text-xs font-medium text-left border-b text-stone-500 first-of-type:text-center">
      {data}
    </th>
  );
}

export default TableHeaderCell;
