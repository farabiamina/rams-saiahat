import React, { useEffect, useState } from "react";
import "./Modal.css";
import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ children, isOpen, setIsOpen }) => {
  const [condition, setCondition] = useState(false);
  useEffect(() => {
    // Simulate a delay of 2 seconds before setting the condition to true
    const timeout = setTimeout(() => {
      if (isOpen === false) {
        setCondition(false);
      }
    }, 500);
    if (isOpen) {
      setCondition(true);
    }
    return () => clearTimeout(timeout); // Clean up the timeout on component unmount
  }, [isOpen]);

  useEffect(() => {
    if (isOpen || condition) {
      document.body.style.overflow = "hidden";
    } else if (!condition) {
      document.body.style.overflowX = "hidden";
      document.body.style.overflowY = "scroll";
    }
  }, [isOpen, condition]);

  if (condition) {
    return (
      <div className="wrapper">
        <svg
          onClick={() => setIsOpen(false)}
          className="close"
          role="presentation"
          width="23px"
          height="23px"
          viewBox="0 0 23 23"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g stroke="none" strokeWidth={1} fill="#fff" fillRule="evenodd">
            <rect
              transform="translate(11.313708, 11.313708) rotate(-45.000000) translate(-11.313708, -11.313708) "
              x={10.3137085}
              y={-3.6862915}
              width={2}
              height={30}
            />
            <rect
              transform="translate(11.313708, 11.313708) rotate(-315.000000) translate(-11.313708, -11.313708) "
              x={10.3137085}
              y={-3.6862915}
              width={2}
              height={30}
            />
          </g>
        </svg>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
            //   className="form-con"
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }
};

export default Modal;
