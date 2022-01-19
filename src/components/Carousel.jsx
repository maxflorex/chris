import React from 'react';
import { data } from './json/dataLatest';

const Carousel = () => {
    return (
        <div className="bg-slate-200 text-slate-900">
            <div className="container mx-auto">
                <div className="flex justify-between items-center mb-8 mx-4">
                    <h1 className="uppercase tracking-widest">
                        Latests <span className="text-amber-600">Artworks</span>{' '}
                    </h1>
                    <a href="/artworks" className="px-4 py-2 bg-amber-400 rounded-xl">
                        {' '}
                        Explore all Artworks
                    </a>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-4 md:mx-0">
                    {data.map((data, index) => (
                        <div key={index}>
                            <div className=''>
                                <img
                                    src={data.image}
                                    alt={data.title}
                                    className="w-full h-48 md:h-64 object-cover rounded-b-xl rounded-t-sm"
                                />
                                <div className="flex justify-between px-3 mt-3 mb-8">
                                    <h4 className="text-xs bg-white px-3 py-1 rounded-full">
                                        {data.size}
                                    </h4>
                                    <h1 className="font-bold">{data.title}</h1>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel;
