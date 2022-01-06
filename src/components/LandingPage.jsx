import React from 'react';
import { ccLogoDark } from '../images/index';

const LandingPage = () => {
    return (
        <div className="bg-slate-200">
            <div className="mx-auto flex justify-between items-center">
                <div className="flex flex-row w-full justify-between items-center text-center">
                    <div className="text-4xl text-slate-900 font-black uppercase flex justify-self-end p-8 -mr-32 z-20">
                        <img
                            src={ccLogoDark}
                            alt="Logo"
                            alt="fill-slate-900"
                            className="w-full"
                        />
                    </div>
                    <div className="bg-slate-400 basis-1/3 hover:basis-full ease-out duration-300 pt-96">
                        <h1 className="">Hello</h1>
                    </div>
                    <div className="bg-slate-500 basis-1/3 hover:basis-full ease-out duration-300 pt-96">
                        2
                    </div>
                    <div className="bg-slate-600 basis-1/3 hover:basis-full ease-out duration-300 pt-96">
                        3
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
