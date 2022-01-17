import React from 'react'
import data from '../../components/json/collections/DataFaunaColl';
import Featured from '../../components/CollCard';
import { motion } from 'framer-motion';

const Fauna = () => {
    return (
        <div>
            <motion.div className="bg-slate-100">
                <div className="px-4">

                    <div className="text-slate-800 flex justify-between py-12 container mx-auto items-center">
                        <div>
                            <div>
                                <h1 className="text-2xl font-black uppercase">
                                    Featured Artworks
                                </h1>
                                <p className="font-ligh text-md">
                                    Check out my newest artworks
                                </p>
                            </div>
                        </div>
                        <a href='/collections' className='btn uppercase tracking-widest bg-slate-900 md:mt-4 hover:bg-amber-400 ease-in-out transition duration-500 hover:scale-105 mt-6 border-0'>
                           Explore Collections
                        </a>
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
                                    size={data.size}
                                    medium={data.medium}
                                    sold={data.sold}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Fauna
