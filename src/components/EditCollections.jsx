import { useState } from 'react';
import { data } from './json/dataCollections';
import EditArtworks from './EditArtworks';


const EditCollections = () => {
    const [selectedCollection, setSelectedCollection] = useState('Abstract');

    const tab = 'btn bg-slate-400 border-0'

    return (
        <>
            <section className="bg-slate-200 py-12">
                <h1 className="text-2xl text-center font-bold">Collections</h1>
            </section>
            <section className="flex flex-wrap gap-4 items-center justify-center">
                {data.map((data, index) => [
                    <h1
                        key={index}
                        className={`${tab} + ${
                            selectedCollection === data.title && 'bg-slate-300'
                        }`}
                        onClick={() => setSelectedCollection(data.title)}
                    >
                        {data.title}
                    </h1>
                ])}
            </section>
            <EditArtworks selectedCollection={selectedCollection} />
        </>
    );
};

export default EditCollections;

