import React from 'react';
import './MySelf.css';

const MySelf = ({ house }) => {
    return (
        <div>
            <h5>This is My self</h5>
            <p><small>House No : {house}</small></p>
        </div>
    );
};

export default MySelf;