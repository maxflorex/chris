import React, { useEffect } from 'react'
import { motion } from 'framer-motion';

const ProgressBar = ({  setFile, myUrl, myProgress }) => {

    useEffect(() => {
        if (myUrl) {
            setFile(null);
        }
    }, [myUrl, setFile])

    const bar = `h-3 ${myProgress !== 100 ? 'bg-amber-500' : 'bg-slate-300'} rounded-lg my-8`
    return (
        <motion.div className={bar}
        initial={{width: 0, opacity: 0}}
        animate={{width: myProgress + '%', opacity: 1}}
        ></motion.div>
    )
}

export default ProgressBar