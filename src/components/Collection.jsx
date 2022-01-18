import React from 'react';
import { data } from './json/dataCollections';

const Collections = () => {
    return (
        <div className="bg-slate-900 pt-16 pb-8 md:pb-16">
            <div className="container flex flex-row mx-auto justify-between">
                <div className="container mx-auto">
                    <div className="flex justify-between items-center mb-8 mx-4 md:mx-0">
                        <h1 className="uppercase tracking-widest text-slate-100">
                            Explore my{' '}
                            <a href="/collections">
                                <span className="text-amber-500">
                                    Latest Collections
                                </span>
                            </a>
                        </h1>
                    </div>

                    <div className="grid grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 my-12 md:gap-4 gap-4 mx-4 md:mx-0">
                        {data.map((data, index) => (
                            <div key={index}>
                                <a href={data.link}>
                                    {/* FINALLY!!! DYNAMIC BACKGROUND!!! YESSSSS */}
                                    <div
                                        style={{
                                            backgroundImage: `url(${data.image})`,
                                        }}
                                        className="md:hover:scale-105 transform-gpu transition-all duration-500 bg-cover rounded-b-md rounded-t-sm overflow-hidden"
                                    >
                                        <div className="flex flex-col lg:flex-row justify-between items-center bg-slate-900 bg-opacity-90 backdrop-blur-md hover:backdrop-blur-none hover:bg-opacity-0 ease-in-out transition duration-500 pt-32 md:pt-48 px-4 pb-6  m-1 xl:m-2 rounded-b-lg rounded-t-sm shadow-lg">
                                            <h4 className="text-xs bg-amber-500 px-3 py-1 rounded-full text-slate-900 tracking-widest mb-2 lg:mb-0">
                                                {data.qty}
                                            </h4>
                                            <h1 className="font-normal text-sm md:text-xl uppercase tracking-widest hover:scale-100 drop-shadow-md text-slate-100">
                                                {data.title}
                                            </h1>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Collections;
