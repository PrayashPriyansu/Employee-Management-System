import { ChevronsRight } from "lucide-react";
import { motion } from "motion/react";

function ToggleClose({ isOpen, handleSidebar }) {
  return (
    <button
      onClick={handleSidebar}
      className="py-1 mt-auto transition-colors duration-200 border-t group border-stone-300"
    >
      <div className="flex items-center gap-4 transition-colors duration-200 rounded-lg bg-slate-50 group-hover:bg-stone-200">
        <div className="flex p-2 text-lg place-content-center ">
          <ChevronsRight
            className={`transition-transform duration-200 text-white  sm:text-black ${
              isOpen && "rotate-180"
            } size-8 `}
          />
        </div>
        {isOpen && (
          <motion.span
            layout
            className="font-medium text-black text-md "
            initial={{ y: -12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.125 }}
          >
            Hide
          </motion.span>
        )}
      </div>
    </button>
  );
}

export default ToggleClose;
