import React from 'react';
import { data } from './json/dataCollections';

const Collections = () => {
    return (
        <div className="bg-slate-900 py-16">
            <div className="container flex flex-row mx-auto justify-between">
                <div className="container mx-auto">
                    <div className="flex justify-between items-center mb-8">
                        <h1 className="uppercase tracking-widest">
                            view my{' '}
                            <span className="text-amber-500">
                                Latest Collections
                            </span>
                        </h1>
                        {/* <a
                            href="/"
                            className="px-4 py-2 bg-amber-400 rounded-xl"
                        >
                            Explore all Artworks
                        </a> */}
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 my-12 gap-12">
                        {data.map((data, index) => (
                            <div key={index}>
                                <a href="/">
                                    {/* FINALLY!!! DYNAMIC BACKGROUND!!! YESSSSS */}
                                    <div
                                        style={{
                                            backgroundImage: `url(${data.image})`,
                                        }}
                                        className="rounded-t-lg hover:scale-105 transform-gpu transition-all duration-500 object-cover"
                                    >
                                        <div className="flex justify-between items-center bg-gradient-to-t from-slate-900 transition-all duration-500 pt-64 px-4 pb-6">
                                            <h4 className="text-xs bg-amber-500 px-3 py-1 rounded-full text-slate-900 tracking-widest">
                                                {data.qty}
                                            </h4>
                                            <h1 className="font-thin text-2xl uppercase tracking-widest hover:scale-100">
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
