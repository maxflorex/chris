import React from 'react';

const FormPrice = ({ price, setPrice }) => {
    return (
        <div>
            <div className="flex gap-4">
                <input
                    type="number"
                    placeholder="Type price"
                    onChange={(e) => {
                        setPrice(e.target.value);
                    }}
                    className="input w-full max-w-xl"
                    value={price}
                />
            </div>
        </div>
    );
};

export default FormPrice;
