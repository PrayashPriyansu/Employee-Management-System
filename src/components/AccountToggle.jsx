import { ChevronsUpDown } from "lucide-react";
import { motion } from "motion/react";

function AccountToggle({ isOpen }) {
  return (
    <div className="pb-4 mt-2 mb-4 border-b border-stone-300">
      <button
        className={`flex p-0.5 hover:bg-stone-500 sm:hover:bg-stone-200   rounded transition-colors relative gap-2 w-full items-center `}
      >
        <img
          src="https://api.dicebear.com/9.x/adventurer/svg?seed=Sara"
          alt="avatar"
          className="ml-0.5 rounded size-9 bg-violet-500"
        />
        {isOpen && (
          <>
            <motion.div
              layout
              initial={{ y: -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.125 }}
              className="flex flex-col text-start"
            >
              <span className="text-sm font-semibold text-white sm:text-black">
                Prayash Priyansu
              </span>
              <span className="text-xs text-white/70 sm:text-stone-500">
                prayashpriyansu27@gmail.com
              </span>
            </motion.div>
            <ChevronsUpDown className="text-white sm:text-black" />
          </>
        )}
      </button>
    </div>
  );
}

export default AccountToggle;
