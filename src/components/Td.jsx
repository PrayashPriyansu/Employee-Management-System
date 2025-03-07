import { motion } from "motion/react";
function Td({ children, colSpan = 1, className }) {
  const tdStyle = "px-2 py-2 text-sm border-b";
  return (
    <motion.td
      className={`${tdStyle} ${className}`}
      colSpan={colSpan}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75, ease: "easeInOut" }}
    >
      {children}
    </motion.td>
  );
}

export default Td;
