import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { FiSearch } from 'react-icons/fi';
import SearchModal from './SearchModal';

const Navb = () => {
    const [clicked, setClicked] = useState(false);
    const links = 'hover:scale-110 hover:text-amber-400 duration-500';
    const linksDrop =
        'hover:text-amber-400 hover:scale-110 ease-in-out transition-transform duration-500 text-slate-100 font-semibold ';

        const handleClick = () => {
            document.getElementById('dropdown').click();
        }

    return (
        <div className="bg-slate-200 py-4">
            <div className="mx-4 md:mx-0">
                <div className="container mx-auto uppercase flex flex-row justify-between items-center">
                    {/* MENU */}

                    <div className="flex-row gap-8 text-xs items-center font-semiboldld tracking-widest text-slate-900 hidden md:flex">
                        <Link to="/" className={links}>
                            Home
                        </Link>
                        <Link to="/explore" className={links}>
                            Explore
                        </Link>
                        <Link to="/about" className={links}>
                            About
                        </Link>
                        <Link to="/collections" className={links}>
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

                    <div className="dropdown md:hidden p-0">
                        <div
                            tabIndex="0"
                            className="my-2 bg-slate-100 rounded-lg hover:bg-amber-400 border-0 cursor-pointer"
                        >
                            <h1 className='bg-slate-100 text-slate-900 hover:bg-amber-400 hover:text-slate-900 px-4 py-2 rounded-lg ease-in-out hover:scale-110 duration-500 text-xs'>MENU</h1>
                        </div>
                        <ul
                            tabIndex="0"
                            className="p-8 shadow menu dropdown-content bg-slate-900 bg-opacity-50 rounded-box backdrop-blur-md w-[50vw] font-light tracking-wider grid gap-4 content-center"
                        >
                            <Link className={linksDrop} onClick={handleClick} to="/">
                                HOME
                            </Link>
                            <Link className={linksDrop} onClick={handleClick} to="/explore">
                                EXPLORE
                            </Link>
                            <Link className={linksDrop} onClick={handleClick} to="/about">
                                ABOUT
                            </Link>
                            <Link className={linksDrop} onClick={handleClick} to="/collections">
                                COLLECTION
                            </Link>
                            <Link className={linksDrop} onClick={handleClick} to="/contact">
                                CONTACT
                            </Link>
                            <Link className={linksDrop} onClick={handleClick} to="/login">
                                LOGIN
                            </Link>
                        </ul>
                    </div>
                    <section className="flex flex-row items-center">
                        <a href="/login">
                            <h1 className="bg-slate-300 text-slate-900 hover:bg-amber-400 hover:text-slate-900 px-4 py-2 rounded-lg ease-in-out hover:scale-110 duration-500 text-xs mx-4 cursor-pointer">
                                Login
                            </h1>
                        </a>

                        {/* SEARCH */}

                        <div className="text-xs">
                            <div className="bg-slate-100 text-slate-900 hover:bg-amber-400 hover:text-slate-900 px-4 py-2 rounded-lg ease-in-out hover:scale-110 duration-500" onClick={() => setClicked(!clicked)}>
                                <FiSearch className="text-slate-900" />
                            </div>
                        </div>
                        {clicked === true && <SearchModal setClicked={setClicked} clicked={clicked} />}
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Navb;
