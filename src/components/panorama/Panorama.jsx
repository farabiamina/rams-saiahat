import React, { useState } from "react";
import ZoomImg from "../../images/zoom.jpg";
import ZoomSvg from "../../svg/ZoomSvg";
import Modal from "../modal/Modal";
import { Carousel } from "antd";
import Pan1 from "../../images/pan1.jpg";
import {motion, AnimatePresence} from "framer-motion";

const Panorama = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="zoom">
      <img className="zoom-img" src={ZoomImg} alt="" />
      <div className="zoom-btn one" onClick={() => setIsOpen(true)}>
        <ZoomSvg className="zoom-svg" />
      </div>
      <div className="zoom-btn two">
        <ZoomSvg className="zoom-svg" />
      </div>
      <div className="zoom-btn three">
        <ZoomSvg className="zoom-svg" />
      </div>
      <div className="zoom-btn four">
        <ZoomSvg className="zoom-svg" />
      </div>
      <Modal setIsOpen={setIsOpen} isOpen={isOpen}>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
              className="car-con"
            >
              <Carousel>
                <img src={Pan1} alt="" />
              </Carousel>
            </motion.div>
          )}
        </AnimatePresence>
      </Modal>
    </div>
  );
};

export default Panorama;
