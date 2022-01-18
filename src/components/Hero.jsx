import React from 'react';
import { ccLogoWhite } from '../images/index';

const Hero = () => {
    return (
        <div className="bg-slate-200 pb-12">
            <div className="mx-4 md:mx-0">
                <div className="container md:mx-auto flex bg-[url('/src/images/All/cc-red-storm.jpg')] bg-cover rounded-b-xl rounded-t-sm items-center">
                    {/* GLASMORPHISM EFFECT */}
                    <div className="bg-slate-100 shadow-lg m-1 lg:m-2 rounded-b-lg rounded-t-sm bg-opacity-20 bg-clip-padding min-h-[60vh] w-full flex items-center backdrop-blur-md">
                        <div className="text-slate-900 w-full flex flex-col justify-center items-center">
                            <h1 className="font-light tracking-widest text-xl uppercase text-white pb-2">
                                The Art of
                            </h1>

                            <img
                                src={ccLogoWhite}
                                alt="Chris Logo"
                                className="lg:w-1/3 md:w-1/2 w-2/3"
                            />

                            <a
                                href="/artworks"
                                className="bg-slate-900 py-2 px-4 rounded-full text-slate-100 uppercase tracking-widest font-ligh bg-opacity-50 hover:bg-opacity-100 hover:scale-110 ease-in-out duration-300 transform-gpu text-xs"
                            >
                                Explore
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
