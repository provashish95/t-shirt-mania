import React, { useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './GrandPa.css';


export const RingContext = React.createContext();

const GrandPa = () => {
    const [house, setHouse] = useState(1);

    const ornament = "Golden ring ";

    const handleBuyAHouse = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount);
    }

    return (
        <RingContext.Provider value={ornament}>
            <div className='grandpa' >
                <h1>Grand Pa</h1>
                <button onClick={handleBuyAHouse}>Buy A House</button>
                <p>Main House : {house}</p>
                <section style={{ display: 'flex' }}>
                    <Father house={house} ornament={ornament}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </section>
            </div>
        </RingContext.Provider>
    );
};

export default GrandPa;