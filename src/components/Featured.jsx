import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Featured = ({ title, imageSrc, artDate, medium, desc, available }) => {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="rounded-md bg-slate-100 flex flex-row"
        >
            <div className="text-slate-800">
                <img
                    src={imageSrc}
                    alt="Artwork"
                    className="rounded-t-md"
                />
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl uppercase font-bold p-8">
                        {title}
                    </h1>
                    <motion.button
                        onClick={() => setShowDetails(!showDetails)}
                        transition={{ ease: 'easeOut', duration: 0.51 }}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                        className="bg-slate-200 px-3 py-1  rounded-full mr-4 hover:bg-slate-900 hover:text-white text-xs tracking-wider"
                    >
                        DETAILS
                    </motion.button>
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ease: 'easeIn', duratuin: 1 }}
                >
                    {showDetails && (
                        <div className="px-4 pb-4 border-l-4 border-slate-500">
                            <ul className="">
                                <ul className="flex flex-row justify-between">
                                    <li>{medium}</li>
                                    <li>{artDate}</li>
                                </ul>
                                <li className="">{desc}</li>
                                <li>{available}</li>
                            </ul>
                        </div>
                    )}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Featured;
