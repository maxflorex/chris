import React, { useState, useEffect } from 'react';
import { data } from '../components/json/collections/DataArtworks';
import Modal from '../components/Modal';

const Artworks = () => {
    // LOAD MORE
    const [noOfElements, setNoOfElements] = useState(6);
    const loadMore = () => {
        setNoOfElements(noOfElements + 3)
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
        <div className="pt-8 pb-16 bg-slate-200">
            <div className="mx-4">
                <div className="container mx-auto masonry-2 md:masonry-2 lg:masonry text-slate-900">
                    {slice.map((data, index) => (
                        <div key={index} className="gap-2">
                            <img
                                src={data.image}
                                alt={data.title}
                                className="w-full object-cover rounded-md cursor-pointer"
                                onClick={() => handleClick(data, index)}
                            />
                            <h2 className="text-xl m-2 tracking-wide">{data.title}</h2>
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
