import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc, collection, onSnapshot, query } from 'firebase/firestore';
import { colRefArtwork, db } from '../firebase/config';
import { collAbstract } from '../images';

const Artwork = () => {
    const { id } = useParams();
    const [docs, setDocs] = useState([]);

    // GET REAL TIME DATA - READ ELEMENTS
    useEffect(() => {
        const docRef = doc(db, 'artwork', id);
        onSnapshot(docRef, (doc) => {
            setDocs(doc.data(), doc.id)
        })
    },[id])

    const { url, title, tall, wide, sold, medium } = docs;

    return (
        <div className="bg-slate-200 py-16">
            <div className="container mx-auto flex flex-col justify-center items-center text-slate-900">
                <img src={url} alt={title} className="max-w-xl rounded-md" />
                <h1 className="text-3xl mt-4">{title}</h1>
                <p className="font-semibold mb-4">{wide + 'X' + tall}</p>
            </div>
            <div className="flex gap-4 text-slate-900 items-center justify-center">
                {medium && <h2 className="btn btn-sm btn-info">{medium}</h2>}
                <h2 className="btn btn-sm btn-error">
                    {sold === false ? 'Artwork Available' : 'Sold'}
                </h2>
            </div>
        </div>
    );
};

export default Artwork;
