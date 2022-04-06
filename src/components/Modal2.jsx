import React from 'react';
import { FiArrowLeft, FiArrowRight, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Modal2 = ({ val, myIndex, setVal, setMyIndex, docs }) => {
    const handleClick = (e) => {
        if (e.target.classList.contains('dismiss')) {
            setVal(null);
        }
    };

    // ROTATION RIGHT
    const handleRotationRight = () => {
        const totalLength = docs.length;
        if (myIndex + 1 >= totalLength) {
            setMyIndex(0);
            const newUrl = docs[0];
            setVal(newUrl);
            return;
        }
        const newIndex = myIndex + 1;
        const newUrl = docs.filter((item) => {
            return docs.indexOf(item) === newIndex;
        });
        const newItem = newUrl[0];
        setVal(newItem);
        setMyIndex(newIndex);
    };

    // ROTATION LEFT
    const handleRotationLeft = () => {
        const totalLength = docs.length;
        if (myIndex === 0) {
            setMyIndex(totalLength - 1);
            const newUrl = docs[totalLength - 1];
            setVal(newUrl);
            return;
        }
        const newIndex = myIndex - 1;
        const newUrl = docs.filter((item) => {
            return docs.indexOf(item) === newIndex;
        });
        const newItem = newUrl[0];
        setVal(newItem);
        setMyIndex(newIndex);
    };

    console.log(val);

    return (
        <div>
            <motion.div
                className="overlay dismiss flex-col"
                onClick={handleClick}
            >
                {/* IMAGE */}

                <img
                    src={val.url}
                    alt="Bigger one"
                    className="rounded-md block max-w-[60vw] max-h-[80vh] m-auto"
                />
                <div className="absolute bottom-8">
                    <h1 className="p-4 rounded-lg uppercase text-xl text-center text-slate-100">
                        {val.title}
                    </h1>
                    <div className="flex gap-2 items-center justify-center">
                        <h2 className="text-center bg-slate-900 p-2 rounded-lg text-slate-100">
                            {val.wide + 'X' + val.tall}
                        </h2>
                        <h2 className="text-center bg-slate-600 p-2 rounded-lg text-slate-100">
                            {val.medium}
                        </h2>
                        {val.sold === true ? (
                            <h1 className="bg-red-400 p-2 rounded-lg">Sold</h1>
                        ) : (
                            <h1 className="bg-green-400 p-2 rounded-lg text-slate-900">
                                Available
                            </h1>
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

export default Modal2;
