import React, { useEffect } from 'react';
import "./Modal.css"

const Modal = ({ children, isOpen, setIsOpen, setShow }) => {
    useEffect(() => {
        if (isOpen) {
            if (setShow) {
                setShow(true);
            }
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen])
    if (isOpen) {
        return (
            <div className='wrapper'>
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
                {children}
            </div>
        )
    }
}

export default Modal;