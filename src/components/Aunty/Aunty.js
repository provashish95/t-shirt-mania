import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/GrandPa';

const Aunty = ({ house }) => {
    const ring = useContext(RingContext);
    return (
        <div>
            <h1> Aunty </h1>
            <p>House: {house}</p>
            <p>Gift : {ring}</p>
        </div>
    );
};

export default Aunty;