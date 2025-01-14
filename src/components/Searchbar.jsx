import { Search } from "lucide-react";
import { useEffect, useRef } from "react";

function Searchbar() {
  const ref = useRef(null);

  function handleClick() {
    ref.current.focus();
  }

  function handleShortCut(e) {
    if (e.key === "/") {
      e.preventDefault();
      ref.current.focus();
    } else if (e.key === "Esc" || e.key === "Escape") {
      ref.current.blur();
    }
  }

  useEffect(function () {
    window.addEventListener("keydown", handleShortCut);
    return function () {
      window.removeEventListener("keydown", handleShortCut);
    };
  });

  return (
    <div className="px-0.5 ">
      <div
        onClick={handleClick}
        className="bg-stone-200 shadow relative rounded flex items-center focus-within:ring-1  sm:w-52 hover:cursor-text md:focus-within:w-72 px-2 p-1.5 text-sm transition-[width] duration-300"
      >
        <Search className="mr-2 size-7" />
        <input
          type="text"
          ref={ref}
          placeholder="Search"
          className="w-full bg-transparent focus:outline-none"
        />
        <span className="flex text-xs items-center shadow gap-0.5 p-1 rounded bg-stone-50">
          /
        </span>
      </div>
    </div>
  );
}

export default Searchbar;
