import { EditIcon, Eye, Trash } from "lucide-react";
import { Link } from "react-router-dom";

import Button from "../components/ui/Button";
import { useState } from "react";
import CreateModal from "../components/ui/CreateModal";
import EditModal from "../components/ui/EditModal";
import useDeleteEmployee from "../feature/Employees/useDeleteEmployee";
import Spinner from "../components/ui/Spinner";
import getDummyData from "../services/dummyData";

const thStyle =
  " text-left px-2 py-1 border-b text-xs text-stone-500 font-medium ";

const tdStyle = " text-left text-sm px-2 py-3 border-b text-stone-950/80 ";

function EmployeeTable() {
  // const { employees = [] } = useEmployees();
  const employees = getDummyData();

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);

  const [deleteId, setDeleteId] = useState(null);

  const { deleteEmployee, isLoadingDelete } = useDeleteEmployee();

  const handleAddEmployee = () => {
    setIsOpen(true);
  };

  return (
    <div className="flex flex-col gap-2 px-3">
      <CreateModal isOpen={isOpen} handleClose={() => setIsOpen(false)} />
      <div className="flex">
        <div className="flex-1"></div>
        <Button size="small" variant="secondary" onClick={handleAddEmployee}>
          Add Employee
        </Button>
      </div>
      <div className="overflow-x-auto">
        <table className="relative w-full border-collapse table-fixed">
          <thead className="">
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
          <tbody className="h-10">
            {employees.map((employee, index) => (
              <tr
                className={`transition-colors duration-200 ${
                  deleteId === employee.id ? "bg-red-50" : ""
                }`}
                key={index}
              >
                <td className={`text-left font-semibold ${tdStyle}`}>
                  {employee.name}
                </td>
                <td className={`text-left ${tdStyle}`}>{employee.phone}</td>
                <td className={`text-right ${tdStyle}`}>
                  {/* {employee.attendance.present} */}
                  20
                </td>
                <td className={`text-right ${tdStyle}`}>
                  {/* {employee.attendance.absent} */}2
                </td>

                <td className={`text-right ${tdStyle}`}>
                  {/* {employee.overtimeHours} */}
                  30
                </td>
                <td className={`text-right ${tdStyle}`}>
                  {/* {employee.totalHoursWorked} */}
                  120
                </td>
                <td className={`text-right ${tdStyle}`}>
                  {employee.hourly_rate}
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
                      <EditIcon
                        onClick={() => setIsOpenEdit(true)}
                        className="size-5 stroke-[1.2] cursor-pointer hover:scale-110 hover:fill-blue-400"
                      />
                      <EditModal
                        employeeData={employee}
                        isOpen={isOpenEdit}
                        handleClose={() => setIsOpenEdit(false)}
                      />
                    </button>
                    {isLoadingDelete && deleteId === employee.id ? (
                      <Spinner />
                    ) : (
                      <button
                        onClick={() => {
                          setDeleteId(employee.id);
                          deleteEmployee(employee.id);
                        }}
                      >
                        <Trash className="size-5 stroke-[1.2] cursor-pointer hover:scale-110 hover:fill-red-400 " />
                      </button>
                    )}
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
