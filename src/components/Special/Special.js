import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/GrandPa';

const Special = ({ ornament }) => {
    const ring = useContext(RingContext);
    return (
        <div>
            <h4>Special one</h4>
            <p>Gift : {ring}</p>
        </div>
    );
};

export default Special;