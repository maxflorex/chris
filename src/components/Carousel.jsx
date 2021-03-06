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
                        href="/explore"
                        className="px-4 py-2 bg-amber-400 rounded-xl"
                    >
                        {' '}
                        Explore all Artworks
                    </a>
                </div>

                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mx-4 md:mx-0 pb-6 md:pb-0">
                    {featured && featured.map(({id, url, title, tall, wide}) => (
                        <div key={id}>
                            <div className="">
                                <img
                                    src={url}
                                    alt={title}
                                    className="w-full h-40 md:h-64 object-cover rounded-lg relative"
                                />
                                <div className="flex flex-col-reverse lg:flex-row justify-between mt-2 mb-8 gap-1 items-start lg:mt-3">
                                    <h4 className="text-xs bg-white p-1 md:px-3 rounded-full m-auto lg:m-0">
                                        {wide + 'X' + tall} 
                                    </h4>
                                    <h1 className="text-sm m-auto lg:m-0 text-center lg:text-right p-1 font-semibold">{title}</h1>
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
