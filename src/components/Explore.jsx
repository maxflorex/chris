import { onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { colRefArtwork } from '../firebase/config';
import Modal2 from './Modal2';

const Explore = () => {
    const [docs, setDocs] = useState([]);
    const [val, setVal] = useState('');
    const [myIndex, setMyIndex] = useState('');

    // GET REAL TIME DATA - READ ELEMENTS
    useEffect(() => {
        const q = query(colRefArtwork, orderBy('createdAt', 'desc'));
        const unsub = onSnapshot(q, (snapshot) => {
            let artwork = [];
            snapshot.docs.forEach((doc) => {
                artwork.push({ ...doc.data(), id: doc.id });
            });
            setDocs(artwork);
        });

        return () => unsub();
    }, []);

    // LOAD MORE
    const [noOfElements, setNoOfElements] = useState(10);
    const loadMore = () => {
        setNoOfElements(noOfElements + noOfElements);
    };
    const slice = docs.slice(0, noOfElements);

    // HANDLE CLICK
    const hanldeClick = (myVal, myIndex) => {
        setVal(myVal);
        setMyIndex(myIndex);
    };

    return (
        <div className="bg-slate-200 p-4 text-slate-900">
            <div className="container mx-auto grid justify-items-center gap-2 md:mt-16 md:mb-12">
                <span className="btn btn-sm border-0 bg-amber-400">
                    Explore
                </span>
                <h1 className="font-semibold text-xl md:text-2xl uppercase md:mb-0 mb-8">By Chris Christian </h1>
            </div>
            <div className="grid grid-cols-2 w-full md:w-1/2 xl:w-1/4 mx-auto gap-4 md:gap-8 break-inside-auto columns-2">
                {docs &&
                    slice.map((data, index) => (
                        <div
                            key={index}
                            className="bg-slate-100 p-2 md:p-4 rounded-lg my-auto overflow-hidden"
                            onClick={() => hanldeClick(data, index)}
                        >
                            <div className="overflow-hidden">
                                <img
                                    src={data.url}
                                    alt={data.title}
                                    className="rounded-lg max-h-80 w-full object-cover hover:scale-110 cursor-pointer"
                                />
                            </div>
                            <h1 className="pt-2 font-semibold text-lg">
                                {data.title}
                            </h1>
                        </div>
                    ))}
            </div>
            <div className="flex justify-center my-16">
                <button className="btn btn-info" onClick={loadMore}>
                    LOAD MORE
                </button>
            </div>
            {val && (
                <Modal2
                    val={val}
                    myIndex={myIndex}
                    setVal={setVal}
                    setMyIndex={setMyIndex}
                    docs={docs}
                />
            )}
        </div>
    );
};

export default Explore;
