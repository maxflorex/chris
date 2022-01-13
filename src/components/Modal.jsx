import React from 'react';
import { FiArrowLeft, FiArrowRight, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Modal = ({
    clickedImg,
    setClickedImg,
    handleRotationRight,
    handleRotationLeft,
    clickedTitle,
    clickedSize,
    clickedMedium,
    clickedSold,
}) => {
    const handleClick = (e) => {
        if (e.target.classList.contains('dismiss')) {
            setClickedImg(null);
        }
    };

    return (
        <div>
            <motion.div
                className="overlay dismiss flex-col"
                onClick={handleClick}
            >
                {/* IMAGE */}

                <img
                    src={clickedImg}
                    alt="Bigger one"
                    className="rounded-md block max-w-[60vw] max-h-[80vh] m-auto"
                />
                <div className="absolute bottom-8">
                    <h1 className="p-4 rounded-lg uppercase text-xl text-center">
                        {clickedTitle}
                    </h1>
                    <div className="flex gap-2 items-center justify-center">
                        <h2 className="text-center bg-slate-800 p-2 rounded-lg">
                            {clickedSize}
                        </h2>
                        <h2 className="text-center bg-slate-600 p-2 rounded-lg">
                            {clickedMedium}
                        </h2>
                        {clickedSold ? (
                            <h1 className="bg-red-400 p-2 rounded-lg">Sold</h1>
                        ) : (
                            <h1 className="bg-green-400 p-2 rounded-lg text-slate-900">Available</h1>
                        )}
                    </div>
                </div>
                {/* X BUTTON */}
                <span className="dismiss" onClick={handleClick}>
                    <FiX className="text-white text-2xl dismiss hover:animate-spin" />
                </span>

                {/* RIGHT ARROW */}
                <div
                    onClick={handleRotationRight}
                    className="overlay-arrows_right btn"
                >
                    <FiArrowRight className="text-white text-2xl" />
                </div>

                {/* LEFT ARROW */}
                <div
                    onClick={handleRotationLeft}
                    className="overlay-arrows_left btn"
                >
                    <FiArrowLeft className="text-white text-2xl" />
                </div>
            </motion.div>
        </div>
    );
};

export default Modal;
