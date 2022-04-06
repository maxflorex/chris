import { doc, onSnapshot, query, where, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { colRefArtwork, db } from '../firebase/config';
import { FiArrowUp } from 'react-icons/fi';

const EditSlider = () => {
    const [docs, setDocs] = useState([]);
    const [search, setSearch] = useState('');
    const [selected, setSelected] = useState('');
    const [slider, setSlider] = useState('');
    const [onH, setOnH] = useState('');

    // DATA QUERY - GET ELEMENTS BY COLLECTION
    const qSlider = query(colRefArtwork, where('slider', '==', true));

    // GET REAL TIME DATA - READ ELEMENTS
    useEffect(() => {
        onSnapshot(qSlider, (snapshot) => {
            let slide = [];
            snapshot.docs.forEach((doc) => {
                slide.push({ ...doc.data(), id: doc.id });
            });
            setSlider(slide);
            console.log(slide);
        });
    }, []);

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
        setSelected('');
    };

    // ADD IMAGE TO SLIDER DOCUMENTS - AKA UPDATE DOCUMENT
    const addImage = async (id) => {
        await updateDoc(doc(colRefArtwork, id), {
            slider: true,
        })
            .then(() => {
                console.log('Added to Slider!');
            })
            .finally(() => {
                reset();
            });
    };

    // REMOVE IMAGE FROM SLIDER DOCUMENTS - AKA UPDATE DOCUMENT
    const removeImage = async (id) => {
        await updateDoc(doc(colRefArtwork, id), {
            slider: false,
        })
            .then(() => {
                console.log('Removed from Slider!');
            })
            .finally(() => {
                reset();
            });
    };

    return (
        <>
            <section className="bg-slate-200 py-12">
                <h1 className="text-2xl text-center font-bold">
                    Landing Page Slider
                </h1>
                <p className="text-center">Select the images to display</p>
                <div className="flex bg-slate-100 flex-col p-4 rounded-xl my-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 content-center items-center align-middle place-content-center gap-4">
                        {slider &&
                            slider.map((data) => (
                                <div
                                    key={data.id}
                                    className="relative"
                                    onMouseEnter={() => setOnH(data.id)}
                                    onMouseLeave={() => setOnH('')}
                                >
                                    <img
                                        src={data.url}
                                        alt={data.title}
                                        className="max-h-40 w-full object-cover rounded-lg"
                                    />
                                    {data.id === onH && (
                                        <>
                                            {/* MODAL */}
                                            <label
                                                htmlFor="my-modal-4"
                                                className="btn btn-error btn-sm absolute top-0 right-0 m-2"
                                            >
                                                x
                                            </label>

                                            <input
                                                type="checkbox"
                                                id="my-modal-4"
                                                className="modal-toggle"
                                            />
                                            <label
                                                htmlFor="my-modal-4"
                                                className="modal cursor-pointer"
                                            >
                                                <label
                                                    className="modal-box relative"
                                                    htmlFor=""
                                                >
                                                    <h1 className="text-white text-center text-xl font-bold pb-4">
                                                        Do you really want to
                                                        delete this?
                                                    </h1>
                                                    <div className="flex gap-4 justify-center">
                                                        {/* CONTENT */}

                                                        <button
                                                            className="btn btn-sm border-0 btn-error"
                                                            onClick={() =>
                                                                removeImage(
                                                                    data.id
                                                                )
                                                            }
                                                        >
                                                            YES, DELETE
                                                        </button>
                                                        <button
                                                            className="btn btn-sm border-0 btn-warning"
                                                            onClick={() => {
                                                                document
                                                                    .getElementById(
                                                                        'my-modal-4'
                                                                    )
                                                                    .click();
                                                            }}
                                                        >
                                                            NO, CANCEL
                                                        </button>

                                                        {/* CONTENT END */}
                                                    </div>
                                                </label>
                                            </label>
                                            {/* MODAL END */}
                                        </>
                                    )}
                                </div>
                            ))}
                    </div>
                    <div className="flex flex-col gap-2 justify-center items-center mt-6 mb-2">
                        <FiArrowUp className="text-slate-300" />
                        <h1 className="text-center">Current Selection</h1>
                    </div>
                </div>
            </section>
            <section className="flex flex-col justify-center">
                <div className="flex gap-4 justify-center items-center">
                    <input
                        type="text"
                        placeholder="Artwork Search"
                        className="input w-full max-w-xs bg-slate-300 self-center"
                        onChange={(e) => {
                            setSearch(e.target.value);
                        }}
                        value={search}
                    />
                    <button className="btn btn-warning btn-sm" onClick={reset}>
                        RESET
                    </button>
                </div>
                <div className="flex flex-col gap-4 mt-4">
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
                            <div
                                key={id}
                                className="flex items-center gap-4 p-4 hover:bg-slate-100 mr-auto rounded-xl cursor-pointer"
                                onClick={() => setSelected(id)}
                            >
                                <input
                                    type="checkbox"
                                    className="checkbox bg-slate-300"
                                    checked={selected === id ? 'selected' : ''}
                                    onChange={() => setSelected(id)}
                                />
                                <img
                                    src={url}
                                    alt="Artwork"
                                    className="max-w-16 max-h-16 rounded-sm"
                                />
                                <h1 className="font-bold">{title}</h1>
                                {selected === id ? (
                                    <button
                                        className="btn btn-info btn-sm"
                                        onClick={() => addImage(id)}
                                    >
                                        SEND
                                    </button>
                                ) : (
                                    ''
                                )}
                            </div>
                        ))}
                </div>
            </section>
        </>
    );
};

export default EditSlider;
