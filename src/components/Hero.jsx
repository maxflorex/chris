import React from 'react';
import { HeroSection, Navigation } from '../global/Styled';
import { ccLogo, ccLogoWhite } from '../images/index';

const Hero = () => {
    return (
        <div className="bg-slate-200 pb-12">
            <div className="mx-4 md:mx-0">
                <div className="container md:mx-auto flex bg-[url('/src/images/All/cc-red-storm.jpg')] bg-cover rounded-b-xl rounded-t-sm items-center">
                    {/* GLASMORPHISM EFFECT */}
                    <div className="bg-slate-300 shadow-lg m-3 rounded-b-lg rounded-t-sm bg-opacity-20 bg-clip-padding min-h-[25vh] w-full flex items-center backdrop-blur-md">
                        <div className="text-slate-900 w-full flex flex-col justify-center items-center">
                            <h1 className="font-light tracking-widest text-xl uppercase text-white pb-2">
                                The Art of
                            </h1>

                            <img
                                src={ccLogoWhite}
                                alt="Chris Logo"
                                className="lg:w-1/3 md:w-1/2 w-2/3"
                            />

                            {/* <div className="flex flex-row gap-2 items-center font-normal">
                            <div className="flex flex-row gap-4 items-center">
                            <h4 className="text-xs bg-slate-200 bg-opacity-40 rounded-xl py-2 px-3">Trending:</h4>
                            <a href="/" className="hover:text-amber-400 tracking-wide">
                            #Oceans
                            </a>
                            <a href="/" className="hover:text-amber-400 tracking-wide">
                            #Cayman
                            </a>
                            <a href="/" className="hover:text-amber-400 tracking-wide">
                            #Wild Life
                            </a>
                            <a href="/" className="hover:text-amber-400 tracking-wide">
                            #Abstract
                            </a>
                            </div>
                        </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
