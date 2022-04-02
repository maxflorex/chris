import React, { useEffect, useState } from 'react';
import {
    query,
    where,
    onSnapshot,
    deleteDoc,
    doc,
    updateDoc,
} from 'firebase/firestore';
import { colRefArtwork } from '../firebase/config';
import FormSelectCollection from './forms/FormSelectCollection';

const EditArtworks = ({ selectedCollection }) => {
    const [docs, setDocs] = useState([]);
    const [updateTitle, setUpdateTitle] = useState('');
    const [artCollection, setArtCollection] = useState('');
    const [updateH, setUpdateH] = useState('');
    const [updateW, setUpdateW] = useState('');
    const [edit, setEdit] = useState('');
    const selected = selectedCollection.split(' ').join('');

    // DATA QUERY - GET ELEMENTS BY COLLECTION
    const q = query(colRefArtwork, where('collection', '==', `${selected}`));

    // GET REAL TIME DATA - READ ELEMENTS
    useEffect(() => {
        onSnapshot(q, (snapshot) => {
            let artwork = [];
            snapshot.docs.forEach((doc) => {
                artwork.push({ ...doc.data(), id: doc.id });
            });
            setDocs(artwork);
        });
    }, [selected]);

    // DELETE DOCUMENTS
    const deleteArtwork = async (id) => {
        await deleteDoc(doc(colRefArtwork, id));
    };

    // UPDATE DOCUMENTS
    const updateArtwork = async (id) => {
        await updateDoc(doc(colRefArtwork, id), {
            title: updateTitle,
            wide: updateW,
            tall: updateH,
            collection: selected,
        })
            .then(() => {
                alert('Updated!');
            })
            .finally(() => {
                reset();
            });
    };

    // RESET EVERYTHING
    const reset = () => {
        setUpdateTitle('');
        setEdit('');
        setUpdateH('');
        setUpdateW('');
        setArtCollection('');
    };

    return (
        <>
            <h1 className="pt-16 text-center font-bold text-amber-600 uppercase">
                {selectedCollection} Collection
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 py-8">
                {docs.map((data) => (
                    <div key={data.id}>
                        <div className="relative">
                            <img
                                src={data.url}
                                alt="PictureLatest"
                                className="rounded-lg max-h-48 md:h-96 object-cover w-full"
                            />
                            <div className="flex flex-row gap-2 absolute bottom-0 right-0 m-4">
                                {edit === data.id ? (
                                    <button
                                        className="btn btn-sm btn-accent"
                                        onClick={() => updateArtwork(data.id)}
                                    >
                                        UPDATE
                                    </button>
                                ) : (
                                    <button
                                        className="btn btn-sm btn-info"
                                        onClick={() => setEdit(data.id)}
                                    >
                                        EDIT
                                    </button>
                                )}
                                <button
                                    className="btn btn-sm border-0 btn-error"
                                    onClick={() => deleteArtwork(data.id)}
                                >
                                    DELETE
                                </button>
                            </div>
                        </div>

                        {edit === data.id ? (
                            <>
                                {/* TITTLE */}
                                <input
                                    type="text"
                                    onChange={(e) => {
                                        setUpdateTitle(e.target.value);
                                    }}
                                    className="input input-ghost w-full mt-4"
                                    placeholder={data.title}
                                />

                                <div className="flex flex-row gap-4 -mb-2">
                                    {/* WIDTH */}
                                    <input
                                        type="text"
                                        onChange={(e) => {
                                            setUpdateW(e.target.value);
                                        }}
                                        className="input input-ghost w-full mt-4"
                                        placeholder={data.wide}
                                    />
                                    {/* HEIGHT */}
                                    <input
                                        type="text"
                                        onChange={(e) => {
                                            setUpdateH(e.target.value);
                                        }}
                                        className="input input-ghost w-full mt-4"
                                        placeholder={data.tall}
                                    />
                                </div>
                                {/* COLLECTION */}
                                <FormSelectCollection
                                    setArtCollection={setArtCollection}
                                    artCollection={data.collection}
                                />
                            </>
                        ) : (
                            <>
                                <div className="flex flex-wrap justify-between items-center">
                                    <h1 className="text-lg py-2">
                                        {data.title}
                                    </h1>
                                    <h1 className="font-bold">
                                        {data.wide} X {data.tall}
                                    </h1>
                                </div>
                            </>
                        )}
                        {edit === data.id && (
                            <button
                                className="btn btn-warning btn-sm mt-4 mx-4"
                                onClick={() => reset()}
                            >
                                RESET
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
};

export default EditArtworks;
