import Slideshow from './Slideshow';
import data from './json/collections/DataAbstractColl';
import { useEffect, useState } from 'react';
import { onSnapshot, query, where } from 'firebase/firestore';
import { colRefArtwork } from '../firebase/config';

const Slider = () => {
    const [slider, setSlider] = useState('');

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
        });
    }, []);

    const slide = 'overflow-hidden relative w-full';

    return (
        <div className="bg-slate-200 pb-12">
            <div className="container mx-auto rounded-xl">
                <Slideshow autoplay={true}>
                    {slider && slider.map(({id, title, url}) => (
                        // SLIDE GOES HERE
                        <div key={id} className={slide}>
                            <div className="w-screen">
                                <img
                                    src={url}
                                    alt={title}
                                    className="max-h-[60vh] object-cover w-full"
                                />
                            </div>
                        </div>
                        // SLIDE ENDS HERE
                    ))}
                </Slideshow>
            </div>
        </div>
    );
};

export default Slider;
