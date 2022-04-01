import React, { useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './GrandPa.css';
/*
  Context API 
 1.Call React.createContext() with default value 
 2.Set a variable of the context with uppercase
 3.Make sure you export the context for using others places
 4.Wrap your child content using RingContext.Provider 
 5.Provide a value
 6.to consume the context from child component using useContext() hook
 7.pass the contextName in the useContext() method
 
*/

export const RingContext = React.createContext('ring');

const GrandPa = () => {
    const [house, setHouse] = useState(1);

    const ornament = "Golden ring ";

    const handleBuyAHouse = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount);
    }

    return (
        <RingContext.Provider value={[house, setHouse]}>
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