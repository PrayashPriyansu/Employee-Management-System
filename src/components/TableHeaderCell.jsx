function TableHeaderCell({ data }) {
  return (
    <th className="text-left border-b border-stone-200 text-stone-950/50 first-of-type:text-center">
      {data}
    </th>
  );
}

export default TableHeaderCell;
