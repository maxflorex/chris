import React from 'react';
import { DivDouble, Navigation } from '../global/Styled';

const Contact = () => {
    return (
        <div className="bg-slate-700 py-32 bg-cover bg-repeat">
            <div className="flex flex-wrap flex-row container mx-auto p-24 bg-slate-600 rounded-md justify-between items-center drop-shadow-sm">
                <div className="flex flex-col">
                    <h1 className="text-4xl uppercase font-black leading-tight">
                        Let's work together on <br /><span className='text-yellow-600'>your next art project</span>
                    </h1>
                    <p className='py-4 text-lg'>
                       A couple clicks away from your dreamed art piece
                    </p>
                </div>
                <div className="flex-justify-center">
                    <button className='uppercase hover:bg-slate-400 border-2  px-8 py-4 bg-slate-800 drop-shadow-sm rounded-md font-bold border-none'>Know More</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;
