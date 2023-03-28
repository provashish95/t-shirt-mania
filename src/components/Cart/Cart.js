import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleRemoveFromCart }) => {
    //conditional rendering options
    //1.  element variable
    //2.ternary operator 
    //3. && (and shorthand) operator
    //4. or operator ||

    let command;
    if (cart.length < 4) {
        command = <h5 style={{ color: 'red' }}>Keep adding</h5>
    } else {
        command = <h5 style={{ color: 'green' }}>Thank you for adding cart</h5>
    }

    return (
        <div>
            <h4>Selected Items: {cart.length}</h4>

            {
                cart.map(tShirt =>
                    <p>
                        {tShirt.name}
                        <button onClick={() => handleRemoveFromCart(tShirt)}> X</button>
                    </p>)
            }
            {cart.length === 3 && <div className='orange'>
                <h1>Provashish Roy</h1>
                <p>Web developer</p>
            </div>}
            {cart.length === 2 || <p>This is OR operator OK </p>}
            {command}

            {cart.length > 4 ? <button>Remove item</button> : <h4 style={{ color: 'red' }}>Are You sure adding more ? </h4>}
        </div>
    );
};

export default Cart;