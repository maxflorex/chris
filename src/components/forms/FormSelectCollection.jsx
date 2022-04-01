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
                    <a onClick={() => setArtCollection('Abstract')}>Abstract</a>
                    <a onClick={() => setArtCollection('CatboatsFishing')}>
                        Catboats & Fishing
                    </a>
                    <a onClick={() => setArtCollection('CaymanMemories')}>
                        Cayman Memories
                    </a>
                    <a onClick={() => setArtCollection('LiquidFlow')}>
                        Liquid Flow
                    </a>
                    <a onClick={() => setArtCollection('Woman')}>Woman</a>
                    <a onClick={() => setArtCollection('Fauna')}>Fauna</a>
                    <a onClick={() => setArtCollection('FamilyTree')}>
                        Family Tree
                    </a>
                    <a onClick={() => setArtCollection('Beach')}>Beach</a>
                    <a onClick={() => setArtCollection('')}>- None -</a>
                </li>
            </ul>
        </div>
    );
};

export default FormSelectCollection;
