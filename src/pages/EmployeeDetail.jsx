import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Profile from "../components/Profile";
import { useQuery } from "react-query";
import { getEmployeeDetail } from "../services/apiEmployees";
import Spinner from "../components/Spinner";
import EditModal from "../components/ui/EditModal";
import { useState } from "react";

function EmployeeDetail() {
  const { id } = useParams();

  const [isOpenEdit, setIsOpenEdit] = useState(false);

  const { data, isPending, isFetching } = useQuery({
    queryKey: ["employee", id],
    queryFn: () => getEmployeeDetail(id),
  });

  if (!isPending && isFetching) {
    return <Spinner />;
  }

  return (
    <div className="relative w-full h-full px-3 overflow-y-auto">
      <div className="flex justify-between">
        <Link
          to="/employees"
          className="sticky top-0 z-10 flex items-center gap-1 px-2 py-1 mb-2 rounded-md bg-stone-200 w-fit"
        >
          <ArrowLeft className="stroke-2 size-3" />
          <span className="text-sm">Back</span>
        </Link>

        <div className="flex gap-2">
          <Link
            to={`/employees/${id}/details`}
            className="sticky top-0 z-10 flex items-center gap-1 px-2 py-1 mb-2 rounded-md bg-stone-200 w-fit"
          >
            Show Details
          </Link>
          <button
            onClick={() => setIsOpenEdit(true)}
            className="flex items-center gap-1 px-2 py-1 mb-2 rounded-md bg-stone-200 w-fit"
          >
            Edit
          </button>
          <EditModal
            employeeData={data}
            isOpen={isOpenEdit}
            handleClose={() => setIsOpenEdit(false)}
          />
        </div>
      </div>

      <div className="text-xl font-semibold">
        <Profile employeeData={data?.data} />
      </div>
    </div>
  );
}

export default EmployeeDetail;
