import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Featured = ({ title, imageSrc, size, medium, sold }) => {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="rounded-md bg-white flex flex-row"
        >
            <div className="text-slate-800">
                <img
                    src={imageSrc}
                    alt="Artwork"
                    className="rounded-t-md"
                />
                <div className="flex flex-col xl:flex-row items-center justify-between p-4 gap-2 xl:p-0">
                    <h1 className="text-sm uppercase font-semibold xl:p-4 text-center xl:text-left">
                        {title}
                    </h1>
                    <motion.button
                        onClick={() => setShowDetails(!showDetails)}
                        transition={{ ease: 'easeOut', duration: 0.51 }}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                        className="bg-slate-100 px-3 py-1 xl:my-4 rounded-full xl:mr-4 hover:bg-slate-900 hover:text-white text-xs tracking-wider"
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
                        <div className="px-4 py-4 border-l-4 border-slate-500">
                            <ul className="">
                                <ul className="flex flex-row justify-between">
                                    <li>{size}</li>
                                    <li>{medium}</li>
                                </ul>
                                {sold === true ? <h1 className='text-xs mt-2'><span className='font-bold'>Sold</span> - Get a print / Comission</h1> : <h1 className='text-xs pt-2'>Artwork Available</h1>}
                                <li>{sold}</li>
                            </ul>
                        </div>
                    )}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Featured;
