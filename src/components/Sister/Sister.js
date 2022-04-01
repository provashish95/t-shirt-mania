import React from 'react';
import './Sister.css';

const Sister = ({ house }) => {
    return (
        <div>
            <h5> Sister</h5>
            <p><small>House No : {house}</small></p>
        </div>
    );
};

export default Sister;