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
            setDocs(doc.data(), doc.id);
        });
    }, [id]);

    const { url, title, tall, wide, sold, medium } = docs;

    return (
        <div className="bg-cover" style={{ backgroundImage: `url(${url})` }}>
            <div className="bg-slate-900 py-16 bg-opacity-90">
                <div className="container mx-auto flex flex-col justify-center items-center text-slate-100 w-full md:w-2/3 lg:w-1/2 relative">
                    <img
                        src={url}
                        alt={title}
                        className="px-4 rounded-lg object-contain max-h-[50vh]"
                    />
                    <div className="flex justify-between w-full px-8 py-4 items-center content-center">
                        <h1 className="text-3xl">{title}</h1>
                        <div>
                            <p className="font-bold btn">{wide + 'X' + tall}</p>
                        </div>
                    </div>
                    <div className="flex gap-4 text-slate-900 items-center justify-center pt-8 absolute top-0 right-0">
                        {medium && (
                            <h2 className="btn btn-sm btn-info">{medium}</h2>
                        )}
                        <h2 className="btn btn-sm btn-error">
                            {sold === false ? 'Artwork Available' : 'Sold'}
                        </h2>
                    </div>
                    {/* <h1 className='text-4xl'>{medium}</h1> */}
                </div>
            </div>
        </div>
    );
};

export default Artwork;
