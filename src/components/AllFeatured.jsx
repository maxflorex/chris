import React from 'react';
import { data } from '../components/json/card/data';
import Featured from './Featured';
import { MdTexture } from 'react-icons';
import { motion } from 'framer-motion';

const AllFeatured = () => {
    return (
        <motion.div
        className="bg-slate-300">
            <div className="text-slate-800 flex justify-between pt-16 pb-16 container mx-auto items-center">
                <div>
                    <div>
                        <h1 className="text-4xl font-black uppercase">
                            Featured Artworks
                        </h1>
                        <p className="font-ligh text-xl">
                            Check out my newest artworks
                        </p>
                    </div>
                </div>
                <button className="hover:bg-slate-400 border-2  px-8 py-4 bg-white drop-shadow-sm rounded-md font-bold">
                    VIEW ALL
                </button>
            </div>
            {/* <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-16 items-start"> */}
            <div className='container mx-auto masonry-1 md:masonry-2 lg:masonry pb-12'>
                {data.map((data) => (
                    <div className="break-inside pb-8" key={data.id}>
                        <Featured
                            title={data.title}
                            imageSrc={data.image}
                            medium={data.medium}
                            artDate={data.date}
                        />
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default AllFeatured;
