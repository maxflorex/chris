import React from 'react';
import { FiArrowLeft, FiArrowRight, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';


const Modal = ({
    clickedImg,
    setClickedImg,
    handleRotationRight,
    handleRotationLeft,
  }) => {
    const handleClick = (e) => {
        if (e.target.classList.contains('dismiss')) {
            setClickedImg(null);
        }
    };

    return (
        <div>
            <motion.div className="overlay dismiss" onClick={handleClick}>
                {/* IMAGE */}
                <img src={clickedImg} alt="Bigger one" className='rounded-md'/>
                {/* X BUTTON */}
                <span className="dismiss" onClick={handleClick}>
                    <FiX className='text-white text-2xl dismiss hover:animate-spin'/>
                </span>

                {/* RIGHT ARROW */}
                <div onClick={handleRotationRight} className='overlay-arrows_right btn'>
                    <FiArrowRight className='text-white text-2xl' />
                </div>

                {/* LEFT ARROW */}
                <div onClick={handleRotationLeft} className='overlay-arrows_left btn' >
                    <FiArrowLeft className='text-white text-2xl' />
                </div>
            </motion.div>
        </div>
    );
};

export default Modal;
