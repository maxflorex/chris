import React from 'react';
import { FiChevronDown } from 'react-icons/fi';

const FormSelectCollection = ({ setArtCollection, artCollection }) => {
    return (
        <div className="dropdown my-8">
            <div
                tabIndex="0"
                className="flex gap-4 btn bg-slate-300 border-0 text-slate-900 hover:bg-amber-400"
            >
                <h1>
                    {artCollection === '' ? 'Select Collection' : artCollection}
                </h1>
                <FiChevronDown />
            </div>
            <ul
                tabIndex="0"
                className="dropdown-content menu p-2 m-2 shadow bg-base-100 rounded-md w-52 text-white"
            >
                <li>
                    <button onClick={() => setArtCollection('Abstract')}>Abstract</button>
                    <button onClick={() => setArtCollection('Catboats&Fishing')}>
                        Catboats & Fishing
                    </button>
                    <button onClick={() => setArtCollection('CaymanMemories')}>
                        Cayman Memories
                    </button>
                    <button onClick={() => setArtCollection('LiquidFlow')}>
                        Liquid Flow
                    </button>
                    <button onClick={() => setArtCollection('Woman')}>Woman</button>
                    <button onClick={() => setArtCollection('Fauna')}>Fauna</button>
                    <button onClick={() => setArtCollection('FamilyTree')}>
                        Family Tree
                    </button>
                    <button onClick={() => setArtCollection('Beach')}>Beach</button>
                    <button onClick={() => setArtCollection('')}>- None -</button>
                </li>
            </ul>
        </div>
    );
};

export default FormSelectCollection;
