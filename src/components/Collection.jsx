import UseFirestore from './hooks/UseFirestore';
import UseFirestore2 from './hooks/UseFirestore2';
import UseFirestore3 from './hooks/UseFirestore3';
import UseFirestore4 from './hooks/UseFirestore4';
import UseFirestore5 from './hooks/UseFirestore5';
import UseFirestore6 from './hooks/UseFirestore6';
import UseFirestore7 from './hooks/UseFirestore7';
import UseFirestore8 from './hooks/UseFirestore8';

const Collections = () => {
    const { docs } = UseFirestore('Abstract');
    const { docs2 } = UseFirestore2('Beach');
    const { docs3 } = UseFirestore3('CaymanMemories');
    const { docs4 } = UseFirestore4('LiquidFlow');
    const { docs5 } = UseFirestore5('Woman');
    const { docs6 } = UseFirestore6('Fauna');
    const { docs7 } = UseFirestore7('FamilyTree');
    const { docs8 } = UseFirestore8('Catboats&Fishing');

    const colImage =
        'flex flex-col gap-4 justify-center items-center indicator w-full relative cursor-pointer';

    const colPic =
        'md:hover:scale-105 transform-gpu transition-all duration-500 bg-cover rounded-lg overflow-hiddeng h-48 w-full object-cover opacity-30 hover:opacity-100';

    const colText =
        'font-semibold absolute bottom-0 pb-6 uppercase text-white md:text-xl tracking-side';

    const colNumber =
        'indicator-item indicator-bottom indicator-center badge badger-info p-2 md:p-4 bg-amber-400';

    return (
        <div className="grid bg-slate-900 p-4">
            <div className="my-8 container mx-auto">
                <h1 className="uppercase tracking-widest mt-16 mb-12 ">
                    Explore <span className="text-amber-600">Collections</span>{' '}
                </h1>
                <div className="container grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-center gap-8 mx-auto pb-12">
                    {docs && (
                        <a href="/abstract" className={colImage}>
                            <span className={colNumber}>{docs.length}</span>
                            <img
                                src={docs[0]?.url}
                                alt="Artwork"
                                className={colPic}
                            />
                            <h1 className={colText}>Abstract</h1>
                        </a>
                    )}
                    {docs2 && (
                        <a href="/beach" className={colImage}>
                            <span className={colNumber}>{docs2.length}</span>
                            <img
                                src={docs2[0]?.url}
                                alt="Artwork"
                                className={colPic}
                            />
                            <h1 className={colText}>Beach</h1>
                        </a>
                    )}
                    {docs3 && (
                        <a href="/cayman-memories" className={colImage}>
                            <span className={colNumber}>{docs3.length}</span>
                            <img
                                src={docs3[0]?.url}
                                alt="Artwork"
                                className={colPic}
                            />
                            <h1 className={colText}>Cayman Memories</h1>
                        </a>
                    )}
                    {docs4 && (
                        <a href="/liquid-flow" className={colImage}>
                            <span className={colNumber}>{docs4.length}</span>
                            <img
                                src={docs4[0]?.url}
                                alt="Artwork"
                                className={colPic}
                            />
                            <h1 className={colText}>Liquid Flow</h1>
                        </a>
                    )}
                    {docs5 && (
                        <a href="/woman" className={colImage}>
                            <span className={colNumber}>{docs5.length}</span>
                            <img
                                src={docs5[0]?.url}
                                alt="Artwork"
                                className={colPic}
                            />
                            <h1 className={colText}>Woman</h1>
                        </a>
                    )}
                    {docs6 && (
                        <a href="/fauna" className={colImage}>
                            <span className={colNumber}>{docs6.length}</span>
                            <img
                                src={docs6[0]?.url}
                                alt="Artwork"
                                className={colPic}
                            />
                            <h1 className={colText}>Fauna</h1>
                        </a>
                    )}
                    {docs7 && (
                        <a href="/family-tree" className={colImage}>
                            <span className={colNumber}>{docs7.length}</span>
                            <img
                                src={docs7[0]?.url}
                                alt="Artwork"
                                className={colPic}
                            />
                            <h1 className={colText}>Family Tree</h1>
                        </a>
                    )}
                    {docs8 && (
                        <a href="/catboats-fishing" className={colImage}>
                            <span className={colNumber}>{docs8.length}</span>
                            <img
                                src={docs8[0]?.url}
                                alt="Artwork"
                                className={colPic}
                            />
                            <h1 className={colText}>Catboats & Fishin</h1>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Collections;
