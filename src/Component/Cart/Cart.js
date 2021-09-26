import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    for(const people of cart) {
        total = total + parseInt(people.salary);
    }
    return (
        <div>
            <h2>Added Engineers: {props.cart.length}</h2>
                <h2>Total Salary: ${total}</h2>
        </div>
    );
};

export default Cart;