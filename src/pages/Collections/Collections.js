import React from 'react'
import { data } from '../../components/json/dataCollections'
import { Link } from 'react-router-dom';

const Collections = () => {
    return (
        <div className="bg-slate-900 pt-16 md:pb-16">
            <div className="container flex flex-row mx-auto justify-between">
                <div className="container mx-auto">
                    <div className="items-center mb-8 mx-4 md:mx-0">
                        <h1 className="uppercase tracking-widest text-center text-slate-100">
                            Explore my{' '}
                            <a href="/collections">
                                <span className="text-amber-500">
                                    Latest Collections
                                </span>
                            </a>
                        </h1>
                        {/* <a
                            href="/"
                            className="px-4 py-2 bg-amber-400 rounded-xl"
                        >
                            Explore all Artworks
                        </a> */}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 my-12 md:gap-4 gap-4 xl:w-1/2  mx-auto">
                        {data.map((data, index) => (

                            <div key={index}>
                                <Link to={data.link}>
                                    {/* FINALLY!!! DYNAMIC BACKGROUND!!! YESSSSS */}
                                    <div
                                        style={{
                                            backgroundImage: `url(${data.image})`,
                                        }}
                                        className="md:hover:scale-105 transform-gpu transition-all duration-500 bg-cover rounded-b-md rounded-t-sm overflow-hidden mx-4 md:mx-0"
                                    >
                                        <div className="flex flex-col md:flex-row justify-between items-center bg-slate-900 bg-opacity-90 backdrop-blur-md hover:backdrop-blur-none hover:bg-opacity-0 ease-in-out transition duration-500 pt-32 md:pt-48 px-4 pb-6  m-1 lg:m-2 rounded-b-lg rounded-t-sm shadow-lg">
                                            <h4 className="text-xs bg-amber-500 px-3 py-1 my-2 md:my-0 rounded-full text-slate-900 tracking-widest">
                                                {data.qty}
                                            </h4>
                                            <h1 className="text-slate-100 font-normal text-sm md:text-xl uppercase tracking-widest hover:scale-100 drop-shadow-md text-center md:text-left lg:text-lg">
                                                {data.title}
                                            </h1>
                                        </div>
                                    </div>
                                </Link>

                            </div>
                        ))}
                    </div>
                    <div className="flex items-center">
                        <a href="/artworks" className='btn bg-slate-200 text-slate-900 hover:bg-amber-500 mx-auto'>View All Artworks</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Collections
