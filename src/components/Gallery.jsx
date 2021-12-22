import React, { useState, useEffect } from 'react';
import { data } from '../components/json/card/data';
import { LightBox } from 'react-lightbox-pack';
import "react-lightbox-pack/dist/index.css";

const Gallery = () => {
    const [tag, setTag] = useState('all');
    const [filteredImages, setFilteredImages] = useState([]);
    const [toggle, setToggle] = React.useState(false);
    const [sIndex, setSIndex] = React.useState(0);

    useEffect(() => {
        tag === 'all'
            ? setFilteredImages(data)
            : setFilteredImages(data.filter((image) => image.tag === tag));
    }, [tag]);

    const lightBoxHandler = (state, sIndex) => {
        setToggle(state);
        setSIndex(sIndex);
    };

    return (
        <div className="container mx-auto">
            <div className="my-4">
                <TagButton name="all" handleSetTag={setTag} />
                <TagButton name="new" handleSetTag={setTag} />
                <TagButton name="free" handleSetTag={setTag} />
                <TagButton name="featured" handleSetTag={setTag} />
            </div>

            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredImages.map((data, index) => (
                    <div key={data.id} className="">
                        <img
                            src={data.image}
                            alt="Gallery"
                            className="rounded-md mx-4 md:mx-0"
                            onClick={() => {
                                lightBoxHandler(true, index);
                            }}
                        />
                    </div>
                ))}
                <LightBox
                    state={toggle}
                    event={lightBoxHandler}
                    data={data}
                    imageWidth="60vw"
                    imageHeight="70vh"
                    thumbnailHeight={50}
                    thumbnailWidth={50}
                    setImageIndex={setSIndex}
                    imageIndex={sIndex}
                />
            </div>
        </div>
    );
};

const TagButton = ({ name, handleSetTag }) => {
    return (
        <button
            className="btn m-2 box-border"
            onClick={() => handleSetTag(name)}
        >
            {name.toUpperCase()}
        </button>
    );
};

export default Gallery;
