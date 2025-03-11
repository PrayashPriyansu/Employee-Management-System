import { format } from "date-fns";
import { CircleCheck } from "lucide-react";
import Button from "./ui/Button";

function CalenderDayDetails({ selectedDay }) {
  return (
    <div>
      <div className="col-span-2 mb-10 font-semibold text-stone-500 ">
        {format(selectedDay, "dd MMMM yyyy")}
      </div>
      <div className="grid grid-cols-2 gap-5">
        <div className="grid grid-cols-2 col-span-2">
          <span>Status</span>
          <Button Icon={CircleCheck}>Present</Button>
        </div>
        <div className="grid grid-cols-2 col-span-2">
          <span>In-Time</span>
          <time>9 pm</time>
        </div>
        <div className="grid grid-cols-2 col-span-2">
          <span>Out-Time</span>
          <span>4 pm</span>
        </div>
        <div>
          <span>Hours Worked</span>
        </div>
      </div>
    </div>
  );
}

export default CalenderDayDetails;
