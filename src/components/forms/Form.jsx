import { FormArtworkDetails } from './FormArtworkDetails';
import React, { useState } from 'react';
import UploadArtwork from '../UploadArtwork';
import FormSelectCollection from './FormSelectCollection';
import { colRefArtwork } from '../../firebase/config';
import { addDoc, serverTimestamp } from 'firebase/firestore';
import FormSelectMedium from './FormSelectMedium';
import FormPrice from './FormPrice';

const Form = () => {
    const [height, setHeight] = useState('');
    const [width, setWidth] = useState('');
    const [artworkName, setArtworkName] = useState('');
    const [myUrl, setMyUrl] = useState('');
    const [artCollection, setArtCollection] = useState('');
    const [originalAvaibale, setOriginalAvailable] = useState(true);
    const [medium, setMedium] = useState('');
    const [imageUrl, setImageUrl] = useState(undefined);
    const [price, setPrice] = useState('');

    // RESET FORM
    const reset = () => {
        setArtworkName('');
        setWidth('');
        setHeight('');
        setMyUrl('');
        setArtCollection('');
        setOriginalAvailable(false);
        setMedium('');
        setImageUrl(undefined);
        setPrice('');
    };

    // ON SUBMIT EVENT
    const handleSubmit = (e) => {
        e.preventDefault();

        addDoc(colRefArtwork, {
            title: artworkName,
            tall: height,
            wide: width,
            collection: artCollection,
            url: myUrl,
            medium: medium,
            price: price,
            sold: originalAvaibale,
            createdAt: serverTimestamp(),
        }).then(() => {
            alert('Artwork Submitted!');
            reset();
        });
    };

    return (
        <div className="container mx-auto my-16">
            <h1 className="text-2xl text-center font-bold mb-4 md:mb-0">
                Upload Artwork
            </h1>
            <form
                action=""
                className="flex flex-col gap-4 items-center justify-center"
            >
                <div className="md:flex md:flex-row grid  md:gap-8 gap-0 items-center">
                    <FormArtworkDetails
                        setArtworkName={setArtworkName}
                        artworkName={artworkName}
                        setWidth={setWidth}
                        width={width}
                        setHeight={setHeight}
                        height={height}
                    />

                    <FormSelectCollection
                        setArtCollection={setArtCollection}
                        artCollection={artCollection}
                    />
                </div>
                <div className="flex justify-center items-center gap-4">
                    <h1 className='text-lg'>$</h1>
                    <FormPrice price={price} setPrice={setPrice} />
                </div>
                <div className="flex mb-8 items-center gap-8">
                    <div className="flex gap-2">
                        <input
                            type="checkbox"
                            className="toggle toggle-lg"
                            onChange={() =>
                                setOriginalAvailable(!originalAvaibale)
                            }
                        />
                        <h1>
                            Original Artwork is
                            {originalAvaibale === false
                                ? ' Available'
                                : ' Sold'}
                        </h1>
                    </div>
                    <FormSelectMedium medium={medium} setMedium={setMedium} />
                </div>

                <UploadArtwork
                    setMyUrl={setMyUrl}
                    setImageUrl={setImageUrl}
                    imageUrl={imageUrl}
                />
                <div className="flex gap-4">
                    {artworkName && width && height && artCollection !== '' ? (
                        <span
                            className="btn btn-active bg-amber-400 border-0"
                            onClick={handleSubmit}
                        >
                            SEND
                        </span>
                    ) : (
                        <span className="btn btn-active btn-disabled bg-slate-300 text-slate-900 border-0">
                            COMPLETE FORM
                        </span>
                    )}

                    <span
                        className="btn btn-active bg-slate-300 border-0"
                        onClick={reset}
                    >
                        RESET
                    </span>
                </div>
            </form>

            {artworkName && width && height !== '' && (
                <>
                    <h1 className="pb-4">Artwork Summary</h1>
                    <div className="flex flex-wrap  bg-slate-300 p-8 items-center justify-center rounded-xl gap-8">
                        {artworkName !== '' && <h1>{artworkName}</h1>}
                        {width !== '' && height !== '' && (
                            <h1>
                                {width} X {height}
                            </h1>
                        )}
                        {artCollection !== '' && <h1>{artCollection}</h1>}
                        {originalAvaibale === false ? 'Available' : 'Sold'}
                    </div>
                </>
            )}
        </div>
    );
};

export default Form;
