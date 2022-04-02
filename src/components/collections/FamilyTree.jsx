import React, { useEffect, useState } from 'react';
import { query, where, onSnapshot, deleteDoc, doc } from 'firebase/firestore';
import { colRefArtwork } from '../../firebase/config';

const FamilyTree = () => {
    const [docs, setDocs] = useState([]);

    // DATA QUERY - GET ELEMENTS BY COLLECTION
    const q = query(colRefArtwork, where('collection', '==', 'FamilyTree'));

    // GET REAL TIME DATA - READ ELEMENTS
    useEffect(() => {
        onSnapshot(q, (snapshot) => {
            let artwork = [];
            snapshot.docs.forEach((doc) => {
                artwork.push({ ...doc.data(), id: doc.id });
            });
            setDocs(artwork);
        });
    }, []);

    // DELETE DOCUMENTS
    const deleteArtwork = async (id) => {
        await deleteDoc(doc(colRefArtwork, id));
    };

    return (
        <>
            <h1 className="pt-16 text-center font-bold text-amber-600 uppercase">
                Abstract Collection
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 py-8">
                {docs.map((data) => (
                    <div key={data.id}>
                        <div className="relative">
                            <img
                                src={data.url}
                                alt="PictureLatest"
                                className="rounded-lg max-h-48 md:h-96 object-cover w-full"
                            />
                            <div className="flex flex-row gap-2 absolute bottom-0 right-0 m-4">
                                <button className="btn btn-sm btn-accent">
                                    EDIT
                                </button>
                                <button
                                    className="btn btn-sm border-0 bg-amber-600"
                                    onClick={() => deleteArtwork(data.id)}
                                >
                                    DELETE
                                </button>
                            </div>
                        </div>
                        <h1>{data.title}</h1>
                    </div>
                ))}
            </div>
        </>
    );
};

export default FamilyTree;
