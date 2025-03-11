import { format, parseISO } from "date-fns";
import { useState } from "react";

function DatePicker({ date, setDate }) {
  const [selectedDate, setSelectedDate] = useState(date);

  const handleChange = (e) => {
    const newDate = e.target.value;
    const parsedDate = parseISO(newDate); // Convert to Date object

    // Prevent selecting a future date
    if (parsedDate > new Date()) return;

    setSelectedDate(parsedDate);
    if (setDate) setDate(parsedDate);
  };

  return (
    <input
      type="date"
      name="date"
      value={format(selectedDate, "yyyy-MM-dd")}
      onChange={handleChange}
      max={format(new Date(), "yyyy-MM-dd")} // Prevents future dates in UI
      className="w-1/5 p-2 mt-2 mb-4 transition-all border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    />
  );
}

export default DatePicker;
