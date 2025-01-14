import {
  addMonths,
  endOfMonth,
  endOfWeek,
  format,
  isEqual,
  isSameMonth,
  isToday,
  startOfMonth,
  startOfToday,
  startOfWeek,
} from "date-fns";

import CalenderDayDetails from "../components/CalenderDayDetails";

import { eachDayOfInterval } from "date-fns";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useState } from "react";

// let colStartClasses = [
//   "",
//   "col-start-2",
//   "col-start-3",
//   "col-start-4",
//   "col-start-5",
//   "col-start-6",
//   "col-start-7",
// ];

function CalenderView() {
  const today = startOfToday();
  const firstDayCurrentMonth = startOfMonth(today);

  const [month, setMonth] = useState(firstDayCurrentMonth);
  const [selectedDay, setSelectedDay] = useState(today);

  const days = eachDayOfInterval({
    start: startOfWeek(startOfMonth(month)),
    end: endOfWeek(endOfMonth(month)),
  });

  function previousMonth() {
    setMonth((month) => addMonths(month, -1));
  }
  function nextMonth() {
    setMonth((month) => addMonths(month, 1));
  }

  function handleDaySelect(day) {
    if (!isSameMonth(day, month) && isSameMonth(day, addMonths(month, -1))) {
      previousMonth(day);
    } else if (
      !isSameMonth(day, month) &&
      isSameMonth(day, addMonths(month, 1))
    ) {
      nextMonth(day);
    }

    setSelectedDay(day);
  }

  console.log(startOfWeek(endOfMonth(today)));
  return (
    <div className="pt-8">
      <div className="max-w-md px-4 mx-auto sm:px-7 md:max-w-4xl md:px-6">
        <div className="md:grid md:grid-cols-2 md:divide-x md:divide-gray-200">
          <div className="md:pr-14">
            <div className="flex items-center">
              <h2 className="flex-auto font-semibold text-gray-900">
                {format(month, "MMMM yyyy")}
              </h2>
              <button
                type="button"
                onClick={previousMonth}
                className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Previous month</span>
                <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
              </button>
              <button
                onClick={nextMonth}
                type="button"
                className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Next month</span>
                <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            <div className="grid grid-cols-7 mt-10 text-xs leading-6 text-center text-gray-500">
              <div>S</div>
              <div>M</div>
              <div>T</div>
              <div>W</div>
              <div>T</div>
              <div>F</div>
              <div>S</div>
            </div>
            <div className="grid grid-cols-7 mt-2 text-sm">
              {days.map((day, dayx) => (
                <div
                  key={day.toString()}
                  className={`py-1.5  ${dayx > 6 && "border-t"} `}
                >
                  <button
                    onClick={() => handleDaySelect(day)}
                    className={`
                        ${isEqual(day, selectedDay) && "text-white"}

                        ${
                          !isEqual(day, selectedDay) &&
                          isToday(day) &&
                          "text-blue-500"
                        } 
                        
                        ${isEqual(day, selectedDay) && "bg-red-500 text-white"}

                        ${
                          isSameMonth(day, month)
                            ? "text-stone-950"
                            : "text-stone-400"
                        }

                        ${
                          isEqual(day, selectedDay) &&
                          isToday(day) &&
                          "bg-stone-960 text-white"
                        }

                        ${
                          isEqual(day, selectedDay) &&
                          !isToday(day) &&
                          "bg-stone-950"
                        }

                        ${!isEqual(day, selectedDay) && "hover:bg-stone-200"}
                        
                        ${
                          (isEqual(day, selectedDay) || isToday(day)) &&
                          "font-bold"
                        }
                        
                        mx-auto flex items-center justify-center rounded-full size-8 `}
                  >
                    <time dateTime={format(day, "yyyy-MM-dd")}>
                      {format(day, "d")}
                    </time>
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="md:pl-14">
            <CalenderDayDetails selectedDay={selectedDay} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalenderView;
