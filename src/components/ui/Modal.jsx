import { XIcon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Button from "./Button";
import { useEffect } from "react";

function Modal({ isOpen, handleClose, heading, children }) {
  useEffect(
    function () {
      function handleEsc(event) {
        if (event.key === "Escape") {
          handleClose();
        }
      }

      document.addEventListener("keydown", handleEsc);
      return () => {
        document.removeEventListener("keydown", handleEsc);
      };
    },
    [handleClose]
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-40 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={handleClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md p-4 bg-white rounded-lg shadow-lg"
            initial={{ y: 50, scale: 0.95, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 50, scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <div className="flex flex-col">
              <div className="flex items-center justify-between mb-10">
                <h3 className="text-lg font-medium text-slate-900">
                  {heading}
                </h3>
                <Button variant="noBg" size="small" onClick={handleClose}>
                  <XIcon />
                </Button>
              </div>

              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Modal;
