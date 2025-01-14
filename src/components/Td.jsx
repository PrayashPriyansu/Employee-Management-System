import { motion } from "motion/react";
function Td({ children, colSpan }) {
  const tdStyle = "px-2 py-2 text-sm border-b";
  return (
    <motion.td
      colSpan={colSpan}
      className={tdStyle}
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
