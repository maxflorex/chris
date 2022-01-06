import React from 'react';
import { ccIcon } from '../images/index';

const Navb = () => {
    return (
        <div className="bg-slate-200 py-4">
            <div className="container mx-auto uppercase flex flex-row justify-between">
                <div className="flex flex-row gap-8 text-xs items-center font-semiboldld tracking-widest text-slate-900">
                    <a
                        href="/"
                        className="hover:scale-110 hover:text-amber-400 duration-500"
                    >
                        Explore
                    </a>
                    <a
                        href="/"
                        className="hover:scale-110 hover:text-amber-400 duration-500"
                    >
                        About
                    </a>
                    <a
                        href="/"
                        className="hover:scale-110 hover:text-amber-400 duration-500"
                    >
                        Collections
                    </a>
                    <a
                        href="/"
                        className="bg-slate-300 hover:bg-amber-400 hover:text-slate-900 px-4 py-2 rounded-lg ease-in-out hover:scale-110 duration-500"
                    >
                        Contact
                    </a>
                </div>
                <div className='text-xs'>
                    <form action="" className="flex gap-2">
                        <input
                            type="text"
                            placeholder="Artwork Search"
                            className="w-full active:bg-opacity-75 rounded-lg px-4 focus:bg-slate-300 bg-slate-300"
                        />
                        <button className="bg-slate-300 text-slate-900 hover:bg-amber-400 hover:text-slate-900 px-4 py-2 rounded-lg ease-in-out hover:scale-110 duration-500">Search</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Navb;
