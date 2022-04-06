import React from 'react';

const FormSelectCollection = ({ setArtCollection, artCollection }) => {
    const selector = 'btn';

    return (
        <div className="dropdown my-8">
            <div
                tabIndex="0"
                className="flex gap-4 btn bg-slate-300 border-0 text-slate-900 hover:bg-amber-400"
            >
                <h1>
                    {artCollection === '' ? 'Select Collection' : artCollection}
                </h1>
            </div>
            <ul
                tabIndex="0"
                className="dropdown-content menu p-2 m-2 shadow bg-base-100 rounded-md w-52 text-white flex flex-col gap-2"
            >
                <li
                    className={selector}
                    onClick={() => setArtCollection('Abstract')}
                >
                    Abstract
                </li>
                <li
                    className={selector}
                    onClick={() => setArtCollection('Catboats&Fishing')}
                >
                    Catboats & Fishing
                </li>
                <li
                    className={selector}
                    onClick={() => setArtCollection('CaymanMemories')}
                >
                    Cayman Memories
                </li>
                <li
                    className={selector}
                    onClick={() => setArtCollection('LiquidFlow')}
                >
                    Liquid Flow
                </li>
                <li
                    className={selector}
                    onClick={() => setArtCollection('Woman')}
                >
                    Woman
                </li>
                <li
                    className={selector}
                    onClick={() => setArtCollection('Fauna')}
                >
                    Fauna
                </li>
                <li
                    className={selector}
                    onClick={() => setArtCollection('FamilyTree')}
                >
                    Family Tree
                </li>
                <li
                    className={selector}
                    onClick={() => setArtCollection('Beach')}
                >
                    Beach
                </li>
                <li className={selector} onClick={() => setArtCollection('')}>
                    - None -
                </li>
            </ul>
        </div>
    );
};

export default FormSelectCollection;
