import { EditIcon, Eye, Trash } from "lucide-react";
import { Link } from "react-router-dom";

const employees = [
  {
    id: 1,
    name: "John Doe",
    phone: "9876543210",
    attendance: {
      present: 20,
      absent: 5,
      late: 2,
    },
    overtimeHours: 10,
    totalHoursWorked: 160,
    hourlyRate: 90,
  },
  {
    id: 2,
    name: "Jane Smith",
    phone: "1234567890",
    attendance: {
      present: 18,
      absent: 7,
      late: 3,
    },
    overtimeHours: 8,
    totalHoursWorked: 150,
    hourlyRate: 120,
  },
  {
    id: 3,
    name: "Alice Brown",
    phone: "5555512345",
    attendance: {
      present: 22,
      absent: 3,
      late: 1,
    },
    overtimeHours: 12,
    totalHoursWorked: 170,
    hourlyRate: 100,
  },
];

function EmployeeTable() {
  const thStyle =
    " text-left px-2 py-1 border-b text-xs text-stone-500 font-medium ";

  const tdStyle = " text-left text-sm px-2 py-3 border-b text-stone-950/80 ";

  return (
    <div className="px-3">
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse table-fixed">
          <thead>
            <tr>
              <th className={`${thStyle}  w-1/6`}>Name</th>
              <th className={`${thStyle} text-left w-1/12`}>Ph. No.</th>
              <th className={`${thStyle} text-right w-1/12`}>Present</th>
              <th className={`${thStyle} text-right w-1/12`}>Absent</th>

              <th className={`${thStyle} text-right w-1/12`}>Overtime</th>
              <th className={`${thStyle} text-right w-1/12`}>Total Hours</th>
              <th className={`${thStyle} text-right w-1/12`}>Rs./hr</th>

              <th className={`${thStyle} text-right w-1/12`}>Salary</th>
              <th className={`${thStyle} text-right w-1/4`}>Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={index}>
                <td className={`text-left font-semibold ${tdStyle}`}>
                  {employee.name}
                </td>
                <td className={`text-left ${tdStyle}`}>{employee.phone}</td>
                <td className={`text-right ${tdStyle}`}>
                  {employee.attendance.present}
                </td>
                <td className={`text-right ${tdStyle}`}>
                  {employee.attendance.absent}
                </td>

                <td className={`text-right ${tdStyle}`}>
                  {employee.overtimeHours}
                </td>
                <td className={`text-right ${tdStyle}`}>
                  {employee.totalHoursWorked}
                </td>
                <td className={`text-right ${tdStyle}`}>
                  {employee.hourlyRate}
                </td>
                <td className={`text-right font-semibold ${tdStyle}`}>
                  {employee.hourlyRate *
                    (employee.totalHoursWorked + employee.overtimeHours)}
                </td>
                <td className={` w-1/12 ${tdStyle}`}>
                  <div className="flex items-center justify-end gap-2">
                    <Link to={`/employees/${employee.id}`}>
                      <Eye className="size-5 stroke-[1.2] cursor-pointer hover:scale-110 hover:fill-green-400" />
                    </Link>
                    <button>
                      <EditIcon className="size-5 stroke-[1.2] cursor-pointer hover:scale-110 hover:fill-blue-400" />
                    </button>
                    <button>
                      <Trash className="size-5 stroke-[1.2] cursor-pointer hover:scale-110 hover:fill-red-400 " />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EmployeeTable;
