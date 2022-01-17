import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';

const Navb = () => {
    return (
        <div className="bg-slate-200 py-4">
            <div className="mx-4 md:mx-0">
                <div className="container mx-auto uppercase flex flex-row justify-between items-center">
                    {/* MENU */}

                    <div className="flex-row gap-8 text-xs items-center font-semiboldld tracking-widest text-slate-900 hidden md:flex">
                        <Link
                            to="/"
                            className="hover:scale-110 hover:text-amber-400 duration-500"
                        >
                            Home
                        </Link>
                        <Link
                            to="/artworks"
                            className="hover:scale-110 hover:text-amber-400 duration-500"
                        >
                            Explore
                        </Link>
                        <Link
                            to="/about"
                            className="hover:scale-110 hover:text-amber-400 duration-500"
                        >
                            About
                        </Link>
                        <Link
                            to="/collections"
                            className="hover:scale-110 hover:text-amber-400 duration-500"
                        >
                            Collections
                        </Link>
                        <Link
                            to="/contact"
                            className="bg-slate-100 hover:bg-amber-400 hover:text-slate-900 px-4 py-2 rounded-lg ease-in-out hover:scale-110 duration-500"
                        >
                            Contact
                        </Link>
                    </div>

                    {/* BURGER */}

                    <div class="dropdown dropdown-hover md:hidden p-0">
                        <div
                            tabIndex="0"
                            className="my-2 bg-slate-100 p-2 rounded-lg hover:bg-amber-400 border-0"
                        >
                            <HiOutlineMenuAlt4 className='text-slate-900' />
                        </div>
                        <ul
                            tabIndex="0"
                            className="p-8 shadow menu dropdown-content bg-slate-900 bg-opacity-50 rounded-box backdrop-blur-md w-[50vw] font-light tracking-wider grid gap-4 ease-in-out transition-transform duration-500"
                        >

                            <Link className='hover:text-amber-400 hover:scale-110 ease-in-out transition-transform duration-500'  to='/'>HOME</Link>
                            <Link className='hover:text-amber-400 hover:scale-110 ease-in-out transition-transform duration-500'  to='/artworks'>EXPLORE</Link>
                            <Link className='hover:text-amber-400 hover:scale-110 ease-in-out transition-transform duration-500'  to='/about'>ABOUT</Link>
                            <Link className='hover:text-amber-400 hover:scale-110 ease-in-out transition-transform duration-500'  to='/collections'>COLLECTION</Link>
                            <Link className='hover:text-amber-400 hover:scale-110 ease-in-out transition-transform duration-500'  to='/contact'>CONTACT</Link>

                        </ul>
                    </div>

                    {/* SEARCH */}

                    <div className="text-xs">
                        <form action="" className="flex gap-2">
                            <input
                                type="text"
                                placeholder="Artwork Search"
                                className="focus:outline-none w-full focus:text-slate-900 active:bg-opacity-75 rounded-lg px-4 focus:bg-slate-100 bg-slate-100 focus:border-white focus:border-2"
                            />
                            <button className="bg-slate-100 text-slate-900 hover:bg-amber-400 hover:text-slate-900 px-4 py-2 rounded-lg ease-in-out hover:scale-110 duration-500">
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
