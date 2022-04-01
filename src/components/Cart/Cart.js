import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleRemoveFromCart }) => {
    return (
        <div>
            <h4>Selected Items: </h4>
            {
                cart.map(tShirt =>
                    <p>
                        {tShirt.name}
                        <button onClick={() => handleRemoveFromCart(tShirt)}> X</button>
                    </p>)
            }
        </div>
    );
};

export default Cart;