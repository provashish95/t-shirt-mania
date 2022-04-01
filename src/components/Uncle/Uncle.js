import React from 'react';
import './Uncle.css';

const Uncle = ({ house }) => {
    return (
        <div>
            <h1> Uncle</h1>
            <p>House : {house}</p>
        </div>
    );
};

export default Uncle;