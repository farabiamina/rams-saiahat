import React, { useRef, useState } from 'react';
import "./ModalForm.css";
import Modal from '../modal/Modal';
// import Request from '../request/Request';
// import FormImg from "../../images/form.jpg";
import { motion, AnimatePresence } from "framer-motion";
import Form from '../form/Form';
import FormImg from "../../images/form2.jpg"

const ModalForm = ({ setIsOpen, isOpen, formId }) => {
    const [show, setShow] = useState(true);
    const setIsModalWithDelay = (bool) => {
        setShow(bool);
        setTimeout(() => {
            setIsOpen(bool);
        }, 300);
    };
    return (
        <Modal setIsOpen={setIsModalWithDelay} isOpen={isOpen} setShow={setShow}>
            <AnimatePresence>
                {
                    show &&
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.3 }}
                        className='form-con'
                    >
                        <img src={FormImg} alt="" />
                        <div className="inner">
                            
                            <h2>Оставьте заявку</h2>
                            <p>Наши специалисты подберут для Вас лучшие условия</p>
                            <Form formId={formId} />
                        </div>
                    </motion.div>
                }
            </AnimatePresence>
        </Modal>
    )
}

export default ModalForm;