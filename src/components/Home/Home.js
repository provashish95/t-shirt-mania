import React from 'react';
import './Home.css';
import Cart from '../Cart/Cart';
import useTshirts from '../../hooks/useTshirts';
import TShirt from '../TShirt/TShirt';


const Home = () => {
    const [tShirts, setTShirts] = useTshirts();
    return (
        <div className="home-container">
            <div className="tShirt-container">

                {
                    tShirts.map(tShirt => <TShirt key={tShirt._id} tShirt={tShirt}></TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart></Cart>

            </div>
        </div>
    );
};

export default Home;