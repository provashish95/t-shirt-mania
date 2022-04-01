import React from 'react';
import Special from '../Special/Special';
import './MySelf.css';

const MySelf = ({ house, ornament }) => {
    return (
        <div>
            <h5>This is My self</h5>
            <p><small>House No : {house}</small></p>
            <Special ornament={ornament}></Special>
        </div>
    );
};

export default MySelf;