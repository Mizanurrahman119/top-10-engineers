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
                {
                    cart.map(cart => <h3 style={{backgroundColor:'khaki', textAlign:'center',padding:'5px'}}>{cart.name}</h3>)
                }
                <button style={{backgroundColor:'lightblue'}}>Hire Now</button>
        </div>
    );
};

export default Cart;