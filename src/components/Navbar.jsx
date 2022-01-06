import React from 'react';
import { Navigation } from '../global/Styled';
import { ccIcon } from '../images';

const Navbar = () => {
    return (
        <div className="container mx-auto text-slate-600">
            <h1 className="uppercase p-16 text-4xl text-center font-thin tracking-widest">
                Browse through my <span className='font-bold'>art Collections</span>
            </h1>
        </div>
    );
};

export default Navbar;
