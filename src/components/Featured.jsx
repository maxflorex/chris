import React from 'react';
import { NavigationC } from '../global/Styled';
import { motion } from 'framer-motion';

const Featured = ({ title, imageSrc }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="rounded-md bg-slate-100 drop-shadow-md flex flex-row"
        >
            <div className="text-slate-800">
                <img
                    src={imageSrc}
                    alt="Artwork Image"
                    className="rounded-t-md"
                />
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl uppercase font-bold p-4">
                        {title}
                    </h1>
                    <motion.button
                        animate={{ x: 24, border: 1, borderColor: 'black' }}
                        transition={{ ease: 'easeOut', duration: 1 }}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                        className="bg-slate-200 px-6 py-2 rounded-full mr-4 hover:bg-slate-900 hover:text-white"
                    >
                        +
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
};

export default Featured;
