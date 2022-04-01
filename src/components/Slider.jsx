import Slideshow from './Slideshow';
import data from './json/collections/DataAbstractColl';

const Slider = () => {
    const slide = 'overflow-hidden relative w-full';

    return (
        <div className="bg-slate-200 pb-12">
            <div className="container mx-auto rounded-xl">
                <Slideshow autoplay={true}>
                    {data.map((data, index) => (
                        // SLIDE GOES HERE
                        <div key={index} className={slide}>
                            <div className="w-screen">
                                <img
                                    src={data.image}
                                    alt={data.title}
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
