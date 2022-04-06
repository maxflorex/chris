import React from 'react';
import { chrisBw } from '../images/index';

const About = () => {
    return (
        <div className="bg-slate-900 md:pb-12 pb-0 md:pt-4 pt-0 mx-auto overflow-hidden">
            <div className="mx-4 md:mx-0">
                <div className="container bg-slate-800 rounded-t-sm rounded-b-xl mx-auto">
                    <div className='bg-[url("/src/images/All/cc-yellow-tatch.jpeg")] rounded-t-sm rounded-b-xl'>
                        <div className="grid grid-cols-1 md:grid-cols-2 items-center mx-auto bg-slate-900 bg-opacity-90 rounded-t-sm rounded-b-xl">
                            <div className="md:pl-16 mt-4 md:pr-0 pl-8 pr-8">
                                <h1 className="text-3xl tracking-wider font-light uppercase pb-4 md:pt-2 pt-8 text-amber-500">
                                    About Me
                                </h1>
                                <p className="font-light leading-relaxed text-lg text-justify md:text-left text-slate-100">
                                    <span className="font-bold">
                                        Chris Christian is a passionate
                                        supporter of Cayman’s thriving
                                        traditional and contemporary art scene. 
                                    </span>{'    '}
                                    A gifted painter in his own right, Chris
                                    employs his experience and skills as the Art
                                    Director for The Galleries of The
                                    Ritz-Carlton, Grand Cayman.
                                </p>
                                <a href='/about'  className="btn uppercase bg-slate-900 md:mt-4 hover:bg-amber-400 ease-in-out transition duration-500 hover:scale-105 mt-6">
                                    Know More
                                </a>
                            </div>
                            <div className="px-8 pt-8 flex md:justify-end justify-center">
                                <img
                                    src={chrisBw}
                                    alt="Chris Painting"
                                    className="px-8 max-h-72 md:max-h-96"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
