import { useState } from 'react';
import { data } from './json/dataCollections';
import { Abstract, Beach, Catboats, CaymanMemories, Fauna, FamilyTree, LiquidFlow, Woman } from './collections/index'


const EditCollections = () => {
    const [selectedCollection, setSelectedCollection] = useState('');

    return (
        <>
            <section className="bg-slate-200 p-8">
                <h1 className="text-2xl text-center font-bold">Collections</h1>
            </section>
            <section className="flex flex-wrap gap-4 items-center justify-center">
                {data.map((data, index) => [
                    <h1
                        key={index}
                        className="btn bg-slate-400 border-0"
                        onClick={() => setSelectedCollection(data.title)}
                    >
                        {data.title}
                    </h1>
                ])}
            </section>
            <Abstract selectedCollection={selectedCollection} />
            {/* {selectedCollection === 'Abstract' && <Abstract />}
            {selectedCollection === 'Catboats & Fishing' && <Catboats />}
            {selectedCollection === 'Cayman Memories' && <CaymanMemories />}
            {selectedCollection === 'Liquid Flow' && <LiquidFlow />}
            {selectedCollection === 'Family Tree' && <FamilyTree />}
            {selectedCollection === 'Woman' && <Woman />}
            {selectedCollection === 'Fauna' && <Fauna />}
            {selectedCollection === 'Beach' && <Beach />} */}
        </>
    );
};

export default EditCollections;

