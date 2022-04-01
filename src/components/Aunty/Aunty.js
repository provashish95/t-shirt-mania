import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/GrandPa';

const Aunty = () => {
    const [house, setHouse] = useContext(RingContext);
    return (
        <div>
            <h1> Aunty name </h1>
            <p>House: {house}</p>
            <button onClick={() => setHouse(house > 0 ? house - 1 : house)}>Sell House</button>
        </div>
    );
};

export default Aunty;