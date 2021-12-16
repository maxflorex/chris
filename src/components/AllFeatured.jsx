import React from 'react';
import { data } from './json/card/data';
import Featured from './Featured';

const AllFeatured = () => {
    return (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((data) => (
                <div className="" key={data.id}>
                    {/* <div className="col-span-1">

                    </div> */}
                    <Featured title={data.title} className=''/>
                </div>
            ))}
        </div>
    );
};

export default AllFeatured;
