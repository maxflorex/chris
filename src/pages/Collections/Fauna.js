import Featured from '../../components/CollCard';
import { motion } from 'framer-motion';
import UseFirestore from '../../components/hooks/UseFirestore';

const Fauna = () => {
    const { docs } = UseFirestore('Fauna');
    return (
        <div>
            <motion.div className="bg-slate-200">
                <div className="px-4">

                    <div className="text-slate-800 flex justify-between py-12 container mx-auto items-center">
                        <div>
                            <div>
                                <h1 className="text-2xl font-black uppercase">
                                    Fauna
                                </h1>
                                <a href="/collections">

                                    <p className="font-ligh text-md hover:text-amber-400">
                                        Collections
                                    </p>
                                </a>
                            </div>
                        </div>
                        <a href='/explore' className='btn uppercase tracking-widest bg-slate-900 hover:bg-amber-400 ease-in-out transition duration-500 hover:scale-105 border-0'>
                            View All
                        </a>
                    </div>
                    <div className="container mx-auto masonry-1 md:masonry-2 lg:masonry pb-12">
                        {docs.map((data) => (
                            <div
                                className="break-inside pb-8 mx-2 md:mx-0"
                                key={data.id}
                            >
                                <Featured
                                    title={data.title}
                                    imageSrc={data.url}
                                    size={data.wide + 'X' + data.tall}
                                    medium={data.medium}
                                    sold={data.sold}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Fauna
