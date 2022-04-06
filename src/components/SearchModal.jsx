import { FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';
import {
    doc,
    onSnapshot,
    query,
    where,
    updateDoc,
    limit,
} from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { colRefArtwork } from '../firebase/config';
import { Link } from 'react-router-dom';

const SearchModal = ({ setClicked, clicked }) => {
    const handleClick = (e) => {
        if (e.target.classList.contains('close')) {
            setClicked(false);
        }
    };

    const [docs, setDocs] = useState([]);
    const [search, setSearch] = useState('');
    const [selected, setSelected] = useState('');

    // DATA QUERY - GET ELEMENTS BY COLLECTION
    const q = query(colRefArtwork);

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

    // RESET
    const reset = () => {
        setSearch('');
        handleClick();
    };

    return (
        <motion.div className="top-0 left-0 h-screen w-screen flex-col z-50 bg-slate-900 bg-opacity-90 close fixed">
            <section
                className="flex justify-center w-full h-full relative close"
                onClick={handleClick}
            >
                <div className="flex gap-4 justify-center items-center absolute top-16">
                    <input
                        type="text"
                        className="input w-[50vw] md:w-[25vw] bg-slate-300 self-center text-slate-900 text-xl"
                        onChange={(e) => {
                            setSearch(e.target.value);
                        }}
                        value={search}
                    />
                    <button className="btn btn-warning btn-sm" onClick={reset}>
                        RESET
                    </button>
                </div>
                <div className="flex flex-col gap-4 mt-4 absolute top-40">
                    {docs
                        .filter((data) => {
                            if (search === '') {
                                return search;
                            } else if (
                                data.title
                                    .toLowerCase()
                                    .includes(search.toLowerCase())
                            ) {
                                return data;
                            }
                        })
                        .map(({ title, url, id }) => (
                            <div key={id}>
                                <Link to={`artwork/${id}`}>
                                    <div
                                        className="flex items-center gap-4 p-4 hover:bg-slate-100 hover:bg-opacity-50 rounded-xl cursor-pointer close"
                                        onClick={handleClick}
                                    >
                                        <img
                                            src={url}
                                            alt="Artwork"
                                            className="max-w-16 max-h-16 rounded-sm close"
                                        />
                                        <h1 className="font-bold close">
                                            {title}
                                        </h1>
                                    </div>
                                </Link>
                            </div>
                        ))}
                </div>
                <FiX
                    className="text-white text-2xl close hover:animate-spin absolute top-8 right-16"
                    onClick={handleClick}
                />
            </section>
        </motion.div>
    );
};

export default SearchModal;
