import { format, getHours, startOfDay } from "date-fns";
import Searchbar from "../components/Searchbar";

function getTimeOfDay() {
  const hour = getHours(new Date());

  if (hour >= 0 && hour < 12) return "Morning";
  if (hour >= 12 && hour < 17) return "Afternoon";
  if (hour >= 17 && hour < 21) return "Evening";
  return "Night";
}

function Topbar() {
  return (
    <div className="flex items-center px-4 pb-4 mt-2 mb-4 border-b border-stone-200">
      <div className="sm:flex p-0.5 hidden rounded  relative gap-2 w-full items-center">
        <div className="flex flex-col ">
          <span className="text-sm font-semibold">
            Good {getTimeOfDay()}, Prayash!
          </span>
          <span className="text-xs text-stone-500">
            {format(startOfDay(new Date()), "EEEE , MMM do yyyy")}
          </span>
        </div>
      </div>
      <Searchbar />
    </div>
  );
}

export default Topbar;
