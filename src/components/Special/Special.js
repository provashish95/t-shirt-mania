import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/GrandPa';

const Special = () => {
    const [house, setHouse] = useContext(RingContext);

    return (
        <div>
            <h4>Special one</h4>
            <p>Gift : {house}</p>
            <button onClick={() => setHouse(house + 1)}>Buy A House</button>
        </div>
    );
};

export default Special;