import React from 'react';

const FormSelectMedium = ({ setMedium, medium, current }) => {
    const selector = 'btn';

    return (
        <div className="dropdown dropdown-left my-8">
            <div
                tabIndex="0"
                className="flex gap-4 btn bg-slate-300 border-0 text-slate-900 hover:bg-amber-400"
            >
                <h1>{medium !== '' ? medium : 'Select Medium'}</h1>
            </div>
            <ul
                tabIndex="0"
                className="dropdown-content menu p-2 m-2 shadow bg-base-100 rounded-md w-52 text-white flex flex-col gap-2"
            >
                <li
                    className={selector}
                    onClick={() => setMedium('Acrylic on Canvas')}
                >
                    Acrylic
                </li>
                <li
                    className={selector}
                    onClick={() => setMedium('Oil on Canvas')}
                >
                    Oil
                </li>
                <li
                    className={selector}
                    onClick={() => setMedium('Mixed Media')}
                >
                    Mixed Media
                </li>
                <li className={selector} onClick={() => setMedium('Other')}>
                    Other
                </li>
            </ul>
        </div>
    );
};

export default FormSelectMedium;
