import React, { useState } from 'react';
import './Home.css';
import Cart from '../Cart/Cart';
import useTshirts from '../../hooks/useTshirts';
import TShirt from '../TShirt/TShirt';


const Home = () => {
    const [tShirts, setTShirts] = useTshirts();
    const [cart, setCart] = useState([]);

    const handleAddToCart = (selectedItem) => {
        const exists = cart.find(tShirt => tShirt._id === selectedItem._id);
        if (!exists) {
            const newCart = [...cart, selectedItem];
            setCart(newCart);
        } else {
            alert("Same product not added");
        }
    }

    const handleRemoveFromCart = (removeItem) => {
        const restItems = cart.filter(tShirt => tShirt._id !== removeItem._id);
        setCart(restItems);
    }

    return (
        <div className="home-container">
            <div className="tShirt-container">

                {
                    tShirts.map(tShirt => <TShirt key={tShirt._id} tShirt={tShirt} handleAddToCart={handleAddToCart}></TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>

            </div>
        </div>
    );
};

export default Home;