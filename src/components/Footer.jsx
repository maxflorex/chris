import React from 'react';
import { ccIcon, accIcon } from '../images/index';

import { FiInstagram, FiYoutube, FiFacebook } from 'react-icons/fi';

const Footer = () => {
    return (
        <>
            <div className="bg-slate-900">
                <div className="container flex p-16 flex-wrap justify-between mx-auto align-middle justify-items-center">
                    <div className="justify-items-center aliggn-middle">
                        <a href="/">
                            <img src={ccIcon} alt="Logo Short" width={120} />
                        </a>
                    </div>

                    <div className="self-center">
                        <ul className="flex justify-around list-none text-slate-500 md:gap-8 gap-4 text-2xl">
                            <li className="cursor-pointer">
                                <FiInstagram />
                            </li>
                            <a href="https://www.facebook.com/artandtraditional">
                                <li className="cursor-pointer">
                                    <FiFacebook />
                                </li>
                            </a>
                            <li className="cursor-pointer">
                                <FiYoutube />
                            </li>
                        </ul>
                    </div>
                    <div className="self-center hidden md:block">
                        <a href="https://artcaymanco.com" target="_blank">
                            <img src={accIcon} alt="Logo Short" width={50} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="bg-slate-800 p-2 mx-auto">
                <h1 className="text-sm k text-center">
                    Art Cayman Co. 2022 - All rights reserved
                </h1>
            </div>
        </>
    );
};

export default Footer;
