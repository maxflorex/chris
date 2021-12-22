import React, { useState } from 'react';
import { data } from '../components/json/card/data';
import Featured from './Featured';
import { motion } from 'framer-motion';

const AllFeatured = () => {
    return (
        <motion.div className="bg-slate-300">
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

            <div className="container mx-auto masonry-1 md:masonry-2 lg:masonry pb-12">
                {data.map((data) => (
                    <div
                        className="break-inside pb-8 mx-2 md:mx-0"
                        key={data.id}
                    >
                        <Featured
                            title={data.title}
                            imageSrc={data.image}
                            artDate={data.date}
                            medium={data.medium}
                            desc={data.description}
                            available={data.available}
                        />
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default AllFeatured;