import React from 'react';
export const FormArtworkDetails = ({
    setArtworkName,
    artworkName,
    setWidth,
    width,
    setHeight,
    height,
}) => {
    const numbers = 'input w-24 text-white';

    return (
        <div>
            <div className="flex gap-4">
                <input
                    type="name"
                    placeholder="Type Artwork Name"
                    onChange={(e) => {
                        setArtworkName(e.target.value);
                    }}
                    className="input w-full max-w-xs text-white"
                    value={artworkName}
                />

                <input
                    type="number"
                    placeholder="Width"
                    onChange={(e) => {
                        setWidth(e.target.value);
                    }}
                    className={numbers}
                    value={width}
                    min="1"
                    max="120"
                />
                <input
                    type="number"
                    placeholder="Height"
                    onChange={(e) => {
                        setHeight(e.target.value);
                    }}
                    className={numbers}
                    value={height}
                    min="1"
                    max="120"
                />
            </div>
        </div>
    );
};