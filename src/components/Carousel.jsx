import { onSnapshot, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { colRefArtwork } from '../firebase/config';

const Carousel = () => {
    const [featured, setFeatured] = useState('');

    // DATA QUERY - GET ELEMENTS BY COLLECTION
    const qFeatured = query(colRefArtwork, where('featured', '==', true));

    // GET REAL TIME DATA - READ ELEMENTS
    useEffect(() => {
        onSnapshot(qFeatured, (snapshot) => {
            let artwork = [];
            snapshot.docs.forEach((doc) => {
                artwork.push({ ...doc.data(), id: doc.id });
            });
            setFeatured(artwork);
        });
    }, []);

    return (
        <div className="bg-slate-200 text-slate-900">
            <div className="container mx-auto">
                <div className="flex justify-between items-center mb-8 mx-4">
                    <h1 className="uppercase tracking-widest">
                        Latests <span className="text-amber-600">Artworks</span>{' '}
                    </h1>
                    <a
                        href="/artworks"
                        className="px-4 py-2 bg-amber-400 rounded-xl"
                    >
                        {' '}
                        Explore all Artworks
                    </a>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-4 md:mx-0">
                    {featured && featured.map(({id, url, title, tall, wide}) => (
                        <div key={id}>
                            <div className="">
                                <img
                                    src={url}
                                    alt={title}
                                    className="w-full h-48 md:h-64 object-cover rounded-b-xl rounded-t-sm"
                                />
                                <div className="flex justify-between px-3 mt-3 mb-8">
                                    <h4 className="text-xs bg-white px-3 py-1 rounded-full">
                                        {wide + 'X' + tall} 
                                    </h4>
                                    <h1 className="font-bold">{title}</h1>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel;
