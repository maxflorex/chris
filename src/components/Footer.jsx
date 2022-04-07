import React from 'react';
import { ccIcon, accIcon } from '../images/index';

import { FiInstagram,  FiFacebook } from 'react-icons/fi';

const Footer = () => {
    return (
        <>
            <div className="bg-slate-900">
                <div className="container flex p-6 lg:p-16 flex-wrap justify-between mx-auto align-middle justify-items-center">
                    <div className="justify-items-center aliggn-middle">
                        <a href="/">
                            <img src={ccIcon} alt="Logo Short" width={120} />
                        </a>
                    </div>

                    <div className="self-center">
                        <ul className="flex justify-around list-none text-slate-500 md:gap-8 gap-4 text-2xl">
                            <a href="https://www.instagram.com/chrischristianart/">
                                <li className="cursor-pointer">
                                    <FiInstagram />
                                </li>
                            </a>
                            <a href="https://www.facebook.com/artandtraditional">
                                <li className="cursor-pointer">
                                    <FiFacebook />
                                </li>
                            </a>
                        </ul>
                    </div>
                    <div className="self-center hidden md:block">
                        <a href="https://artcaymanco.com">
                            <img src={accIcon} alt="Logo Short" width={50} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="bg-slate-800 p-2 mx-auto">
                <h1 className="text-sm text-center">
                    Art Cayman Co. 2022 - All rights reserved
                </h1>
            </div>
        </>
    );
};

export default Footer;
