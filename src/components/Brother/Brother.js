import React from 'react';
import './Brother.css';

const Brother = ({ house }) => {
    return (
        <div>
            <h5> Brother</h5>
            <p><small>House No: {house}</small></p>
        </div>
    );
};

export default Brother;