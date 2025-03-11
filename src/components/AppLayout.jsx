import { Outlet } from "react-router-dom";
import Sidebar from "./ui/Sidebar";
import Topbar from "./ui/Topbar";
import { useState } from "react";
import { motion } from "motion/react";

import ProtectedRoute from "./ProtectedRoute";

function AppLayout() {
  const [isOpen, setIsOpen] = useState(false);

  function handleSidebar() {
    setIsOpen((i) => !i);
  }

  return (
    <ProtectedRoute>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`w-dvw  h-dvh bg-slate-100 p-4 gap-4 box-border   grid ${
          isOpen
            ? "grid-cols-[2.75rem_1fr] sm:grid-cols-[15rem_1fr]"
            : "grid-cols-[2.75rem_1fr]"
        } transition-[grid-template-columns] duration-500 overflow-hidden  `}
      >
        <Sidebar isOpen={isOpen} handleSidebar={handleSidebar} />
        <div className="flex flex-col w-full h-full col-start-2 pb-4 overflow-hidden bg-white rounded-lg">
          <Topbar />
          <div className="flex flex-col flex-1 overflow-y-auto ">
            <Outlet />
          </div>
        </div>
      </motion.div>
    </ProtectedRoute>
  );
}
export default AppLayout;
