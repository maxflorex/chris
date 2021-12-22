import React, { useState } from 'react';
import data from './json/card/data.json';
import Modal from './Modal';

const Gallery2 = () => {
    const [clickedImg, setClickedImg] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);

    const handleClick = (item, index) => {
        setCurrentIndex(index);
        setClickedImg(item.image);
    };

    const handleRotationRight = () => {
        const totalLength = data.data.length;
        if (currentIndex + 1 >= totalLength) {
            setCurrentIndex(0);
            const newUrl = data.data[0].image;
            setClickedImg(newUrl);
            return;
        }
        const newIndex = currentIndex + 1;
        const newUrl = data.data.filter((item) => {
            return data.data.indexOf(item) === newIndex;
        });
        const newItem = newUrl[0].image;
        setClickedImg(newItem);
        setCurrentIndex(newIndex);
    };

    const handleRotationLeft = () => {
        const totalLength = data.data.length;
        if (currentIndex === 0) {
            setCurrentIndex(totalLength - 1);
            const newUrl = data.data[totalLength - 1].image;
            setClickedImg(newUrl);
            return;
        }
        const newIndex = currentIndex - 1;
        const newUrl = data.data.filter((item) => {
            return data.data.indexOf(item) === newIndex;
        });
        const newItem = newUrl[0].image;
        setClickedImg(newItem);
        setCurrentIndex(newIndex);
    };

    return (
        <div className="container mx-auto grid grid-cols-3 gap-4">
            {data.data.map((item, index) => (
                <div key={index} className="">
                    <img
                        src={item.image}
                        alt={item.title}
                        className="w-full object-cover rounded-md"
                        onClick={() => handleClick(item, index)}
                    />
                    <h2>{item.title}</h2>
                </div>
            ))}
            {clickedImg && (
                <Modal
                    clickedImg={clickedImg}
                    handleRotationRight={handleRotationRight}
                    handleRotationLeft={handleRotationLeft}
                    setClickedImg={setClickedImg}
                />
            )}
        </div>
    );
};
export default Gallery2;
