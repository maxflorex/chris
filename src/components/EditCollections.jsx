import { useState } from 'react';
import { data } from './json/dataCollections';
import EditArtworks from './EditArtworks';


const EditCollections = () => {
    const [selectedCollection, setSelectedCollection] = useState('Abstract');

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
            <EditArtworks selectedCollection={selectedCollection} />
        </>
    );
};

export default EditCollections;

