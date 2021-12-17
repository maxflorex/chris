import React from 'react';
import { NavigationC } from '../global/Styled';

const Featured = ({ title, imageSrc }) => {
    return (
        <NavigationC className="mx-4">
            <div className="">
                <img src={imageSrc} alt="Artwork Image" />
                <h1 className="text-2xl font-serif uppercase font-bold p-4">
                    {title}
                </h1>
            </div>
        </NavigationC>
    );
};

export default Featured;
