import React, {useState} from 'react';
import ZoomImg from "../../images/zoom.jpg";
import ZoomSvg from "../../svg/ZoomSvg";
import Modal from '../modal/Modal';
import { Carousel } from 'antd';
import Pan1 from "../../images/pan1.jpg";

const Panorama = () => {
    const [show, setShow] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const setIsModalWithDelay = (bool) => {
        setShow(bool);
        setTimeout(() => {
            setIsOpen(bool);
        }, 300);
    };
    return (
        <div className="zoom">
            <img className='zoom-img' src={ZoomImg} alt="" />
            <div className="zoom-btn one">
                <ZoomSvg className="zoom-svg" onClick={() => setIsOpen(true)} />
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
            <Modal setIsOpen={setIsModalWithDelay} isOpen={isOpen} setShow={setShow}>
                <Carousel>
                    <img src={Pan1} alt="" />
                </Carousel>
            </Modal>
        </div>
    )
}

export default Panorama