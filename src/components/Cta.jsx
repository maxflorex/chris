import React from 'react';
import { accIconChris } from '../images/index';

const Cta = () => {
    return (
        <div className="bg-slate-200 text-slate-900 pt-12 pb-12 hidden md:block">
            <div className="mx-4 md:mx-0">
                <div className="container mx-auto bg-white py-12 px-24 grid grid-cols-1 lg:grid-cols-4 rounded-b-xl rounded-t-sm mb-8 drop-shadow-sm items-center gap-4 md:gap-8">
                    <h1 className="text-xl md:text-2xl uppercase font-semibold tracking-widest text-center">
                        Dare To Be <br />
                        <span className="text-amber-500 text-6xl font-light">
                            Unique
                        </span>
                    </h1>
                    <p className="text-light p-0 md:p-4 col-span-2 text-center">
                        Commissioning a painting is a very important event in
                        client’s life. -
                        <span className="italic font-semibold">
                            Creating something truly unique together with an
                            accomplished Artist is a meaningful, luxury
                            experience.
                        </span>
                    </p>
                    <div className="flex flex-col justify-center">
                        <img src={accIconChris} alt="" className="md:max-h-48 max-h-32" />
                        <a href='/contact' className="px-3 py-2 bg-slate-100 rounded-xl self-centered -mt-8 text-center hover:scale-110 hover:bg-amber-400  ease-out transition-all duration-500">
                            Reach Out
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cta;
