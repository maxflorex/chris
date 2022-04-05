import UseFirestore from './hooks/UseFirestore';
import UseFirestore2 from './hooks/UseFirestore2';
import UseFirestore3 from './hooks/UseFirestore3';
import UseFirestore4 from './hooks/UseFirestore4';
import UseFirestore5 from './hooks/UseFirestore5';
import UseFirestore6 from './hooks/UseFirestore6';
import UseFirestore7 from './hooks/UseFirestore7';
import UseFirestore8 from './hooks/UseFirestore8';

const Graph = () => {
    const { docs } = UseFirestore('Abstract');
    const { docs2 } = UseFirestore2('Beach');
    const { docs3 } = UseFirestore3('CaymanMemories');
    const { docs4 } = UseFirestore4('LiquidFlow');
    const { docs5 } = UseFirestore5('Woman');
    const { docs6 } = UseFirestore6('Fauna');
    const { docs7 } = UseFirestore7('FamilyTree');
    const { docs8 } = UseFirestore8('Catboats&Fishing');

    function getRandomItem(arr) {
        // GET RANDOM INDEX VALUE
        const randomIndex = Math.floor(Math.random() * arr.length);
        // GET RANDOM VALUE
        const item = arr[randomIndex];
        // RETURN
        return item
    }

    // console.log(getRandomItem(docs));

    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold py-8">Artwork Statistics</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 justify-center gap-8">
                {docs && (
                    <div className="flex flex-col gap-4 justify-center items-center indicator w-full">
                        <span className="indicator-item badge badge-accent">
                            {docs.length}
                        </span>
                        <img
                            src={docs[0]?.url}
                            alt="Artwork"
                            className="w-full max-h-40 object-cover rounded-lg"
                        />
                        <h1 className="font-semibold">Abstract</h1>
                    </div>
                )}
                {docs2 && (
                    <div className="flex flex-col gap-4 justify-center items-center indicator w-full">
                        <span className="indicator-item badge badge-accent">
                            {docs2.length}
                        </span>
                        <img
                            src={docs2[0]?.url}
                            alt="Artwork"
                            className="w-full max-h-40 object-cover rounded-lg"
                        />
                        <h1 className="font-semibold">Abstract</h1>
                    </div>
                )}
                {docs3 && (
                    <div className="flex flex-col gap-4 justify-center items-center indicator w-full">
                        <span className="indicator-item badge badge-accent">
                            {docs3.length}
                        </span>
                        <img
                            src={docs3[0]?.url}
                            alt="Artwork"
                            className="w-full max-h-40 object-cover rounded-lg"
                        />
                        <h1 className="font-semibold">Abstract</h1>
                    </div>
                )}
                {docs4 && (
                    <div className="flex flex-col gap-4 justify-center items-center indicator w-full">
                        <span className="indicator-item badge badge-accent">
                            {docs4.length}
                        </span>
                        <img
                            src={docs4[0]?.url}
                            alt="Artwork"
                            className="w-full max-h-40 object-cover rounded-lg"
                        />
                        <h1 className="font-semibold">Abstract</h1>
                    </div>
                )}
                {docs5 && (
                    <div className="flex flex-col gap-4 justify-center items-center indicator w-full">
                        <span className="indicator-item badge badge-accent">
                            {docs5.length}
                        </span>
                        <img
                            src={docs5[0]?.url}
                            alt="Artwork"
                            className="w-full max-h-40 object-cover rounded-lg"
                        />
                        <h1 className="font-semibold">Abstract</h1>
                    </div>
                )}
                {docs6 && (
                    <div className="flex flex-col gap-4 justify-center items-center indicator w-full">
                        <span className="indicator-item badge badge-accent">
                            {docs6.length}
                        </span>
                        <img
                            src={docs6[0]?.url}
                            alt="Artwork"
                            className="w-full max-h-40 object-cover rounded-lg"
                        />
                        <h1 className="font-semibold">Abstract</h1>
                    </div>
                )}
                {docs7 && (
                    <div className="flex flex-col gap-4 justify-center items-center indicator w-full">
                        <span className="indicator-item badge badge-accent">
                            {docs7.length}
                        </span>
                        <img
                            src={docs7[0]?.url}
                            alt="Artwork"
                            className="w-full max-h-40 object-cover rounded-lg"
                        />
                        <h1 className="font-semibold">Abstract</h1>
                    </div>
                )}
                {docs8 && (
                    <div className="flex flex-col gap-4 justify-center items-center indicator w-full">
                        <span className="indicator-item badge badge-accent">
                            {docs8.length}
                        </span>
                        <img
                            src={docs8[0]?.url}
                            alt="Artwork"
                            className="w-full max-h-40 object-cover rounded-lg"
                        />
                        <h1 className="font-semibold">Abstract</h1>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Graph;
