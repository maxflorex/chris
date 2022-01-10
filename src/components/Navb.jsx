import React from 'react';
import { ccIcon } from '../images/index';

import { HiOutlineMenuAlt4 } from 'react-icons/hi';

const Navb = () => {
    return (
        <div className="bg-slate-200 py-4">
            <div className="mx-4 md:mx-0">
                <div className="container mx-auto uppercase flex flex-row justify-between items-center">
                    {/* MENU */}

                    <div className="flex-row gap-8 text-xs items-center font-semiboldld tracking-widest text-slate-900 hidden md:flex">
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

                    {/* BURGER */}

                    <div class="dropdown dropdown-hover md:hidden p-0">
                        <div tabindex="0" class="my-2  bg-slate-900 p-2 rounded-lg hover:bg-amber-400 border-0">
                            <HiOutlineMenuAlt4 />
                        </div>
                        <ul
                            tabindex="0"
                            class="p-2 shadow menu dropdown-content bg-slate-800 rounded-box w-52"
                        >
                            <li>
                                <a>EXPLORE</a>
                            </li>
                            <li>
                                <a>ABOUT</a>
                            </li>
                            <li>
                                <a>COLLECTIONS</a>
                            </li>
                            <li>
                                <a>CONTACT</a>
                            </li>
                        </ul>
                    </div>

                    {/* SEARCH */}

                    <div className="text-xs">
                        <form action="" className="flex gap-2">
                            <input
                                type="text"
                                placeholder="Artwork Search"
                                className="w-full active:bg-opacity-75 rounded-lg px-4 focus:bg-slate-300 bg-slate-300"
                            />
                            <button className="bg-slate-300 text-slate-900 hover:bg-amber-400 hover:text-slate-900 px-4 py-2 rounded-lg ease-in-out hover:scale-110 duration-500">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navb;
