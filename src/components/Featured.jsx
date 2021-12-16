import React from 'react';
import { Navigation } from '../global/Styled';

const Featured = ({ title }) => {
    return (
        <Navigation className="bg-red-600 p-2 w-full rounded-md">
            <div className="m-4">
                <h1 className="text-3xl font-serif uppercase font-bold p-4">
                    {title}
                </h1>
            </div>
        </Navigation>
    );
};

export default Featured;
