import { TrendingDown, TrendingUp } from "lucide-react";

function Card({ title, value, trend, pillText, period }) {
  return (
    <div className="col-span-12 p-4 border rounded shadow border-stone-300 md:col-span-4">
      <div className="flex flex-col mb-4 lg:mb-8 lg:justify-between lg:flex-row lg:items-start">
        <div>
          <h3 className="py-1 mb-2 text-sm text-stone-500">{title}</h3>
          <p className="font-semibold md:text-2xl lg:text-3xl">{value}</p>
        </div>
        <span
          className={`${
            trend === "Up"
              ? "text-green-700 bg-green-100"
              : trend === "Down"
              ? "text-red-700 bg-red-100"
              : ""
          } flex w-fit gap-1 text-xs font-medium items-center rounded px-2 py-1 mt-3  lg:mt-0`}
        >
          {trend === "Up" && <TrendingUp className="stroke-[1.5] size-4" />}
          {trend === "Stable" && <TrendingUp className="stroke-[1.5] size-4" />}
          {trend === "Down" && (
            <TrendingDown className="stroke-[1.5] size-4 " />
          )}
          {pillText}
        </span>
      </div>
      <p className="text-sm text-stone-500">{period}</p>
    </div>
  );
}

export default Card;
