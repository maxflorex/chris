import React, { useState, useEffect } from 'react';
import { data } from '../components/json/collections/DataArtworks';
import Modal from '../components/Modal';

const Artworks = () => {
    // LOAD MORE
    const [noOfElements, setNoOfElements] = useState(10);
    const loadMore = () => {
        setNoOfElements(noOfElements + noOfElements)
    }
    const slice = data.slice(0, noOfElements)

    // FILTER STATES - TAG
    const [tag, setTag] = useState('all');
    const [filteredImages, setFilteredImages] = useState([]);

    // INDEX & CLICKED IMAGE STATE
    const [clickedImg, setClickedImg] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);

    const [clickedTitle, setClickedTitle] = useState(null);
    const [clickedSize, setClickedSize] = useState(null);
    const [clickedMedium, setClickedMedium] = useState(null);
    const [clickedSold, setClickedSold] = useState(null);

    // CONDITONS OF FILTER
    useEffect(() => {
        tag === 'all'
            ? setFilteredImages(data)
            : setFilteredImages(data.filter((image) => image.tag === tag));
    }, [tag]);

    // CLICK HANDLER
    const handleClick = (data, index) => {
        setCurrentIndex(index);
        setClickedImg(data.image);
        setClickedTitle(data.title);
        setClickedSize(data.size);
        setClickedMedium(data.medium);
        setClickedSold(data.sold);
    };

    // ROTATION RIGHT

    const handleRotationRight = () => {
        const totalLength = data.length;
        if (currentIndex + 1 >= totalLength) {
            setCurrentIndex(0);
            const newUrl = data[0].image;
            setClickedImg(newUrl);
            const newTitle = data[0].title;
            setClickedTitle(newTitle);
            const newSize = data[0].size;
            setClickedSize(newSize);
            const newMedium = data[0].medium;
            setClickedMedium(newMedium);
            const newSold = data[0].sold;
            setClickedSold(newSold);
            return;
        }
        const newIndex = currentIndex + 1;
        const newUrl = data.filter((item) => {
            return data.indexOf(item) === newIndex;
        });
        const newItem = newUrl[0].image;
        const newTitle = newUrl[0].title;
        const newSize = newUrl[0].size;
        const newMedium = newUrl[0].medium;
        const newSold = newUrl[0].sold;
        setClickedImg(newItem);
        setCurrentIndex(newIndex);
        setClickedTitle(newTitle);
        setClickedSize(newSize);
        setClickedMedium(newMedium);
        setClickedSold(newSold);
    };

    // ROTATION LEFT

    const handleRotationLeft = () => {
        const totalLength = data.length;
        if (currentIndex === 0) {
            setCurrentIndex(totalLength - 1);
            const newUrl = data[totalLength - 1].image;
            setClickedImg(newUrl);
            const newTitle = data[totalLength - 1].title;
            setClickedTitle(newTitle);

            const newSize = data[totalLength - 1].size;
            setClickedImg(newSize);
            const newMedium = data[totalLength - 1].medium;
            setClickedTitle(newMedium);
            const newSold = data[totalLength - 1].sold;
            setClickedSold(newSold);

            return;
        }
        const newIndex = currentIndex - 1;
        const newUrl = data.filter((item) => {
            return data.indexOf(item) === newIndex;
        });
        const newItem = newUrl[0].image;
        const newTitle = newUrl[0].title;
        const newSize = newUrl[0].size;
        const newMedium = newUrl[0].medium;
        const newSold = newUrl[0].sold;
        setClickedImg(newItem);
        setCurrentIndex(newIndex);
        setClickedTitle(newTitle);
        setClickedSize(newSize);
        setClickedMedium(newMedium);
        setClickedSold(newSold);
    };

    return (
        <div className="md:pt-8 md:pb-16 bg-slate-200">
            <div className="mx-8 md:mx-4">
                <div className='flex flex-col py-8 text-slate-900 text-center items-center justify-center'>
                    <h2 data-tip="BROWSE BY COLLECTIONS" className='text-sm font-semibold tracking-wide bg-white px-4 py-2 m-4 rounded-md tooltip'>EXPLORE</h2>
                    <h1 className='uppercase text-2xl tracking-widest text-amber-400 mt-4 md:mb-8'>Artworks by <span className='text-slate-900 font-semibold'>Chris Christian</span></h1>
                </div>
                <div className="container mx-auto columns-1 md:columns-2 lg:columns-2 text-slate-900 gap-8 lg:w-1/2">
                    {slice.map((data, index) => (
                        <div key={index} className="gap-2 my-8 md:my-4 rounded-md overflow-hidden break-inside-avoid">
                            <div className='p-2 bg-white'>

                                <div className="bg-slate-900 rounded-md overflow-hidden">

                                    <img
                                        src={data.image}
                                        alt={data.title}
                                        className="w-full object-cover cursor-pointer opacity-90 hover:scale-105 ease-out duration-300 hover:opacity-100 transform-gpu"
                                        onClick={() => handleClick(data, index)}
                                    />
                                </div>
                                <h2 className="text-lg m-2 tracking-wide">{data.title}</h2>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex items-center justify-center py-8">

                    <button className='btn bg-slate-600 hover:bg-slate-900'
                        onClick={() => loadMore()}
                    >Load More</button>
                </div>

                {/* MODAL INSERTION */}

                {clickedImg && (
                    <Modal
                        clickedImg={clickedImg}
                        handleRotationRight={handleRotationRight}
                        handleRotationLeft={handleRotationLeft}
                        setClickedImg={setClickedImg}
                        clickedTitle={clickedTitle}
                        clickedSize={clickedSize}
                        clickedMedium={clickedMedium}
                        clickedSold={clickedSold}
                    />
                )}
            </div>
        </div>
    );
};

export default Artworks
