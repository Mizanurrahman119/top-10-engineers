import React, { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart'
import People from '../People/People'
import './Engineer.css'

const Engineer = () => {
    const [ peoples, setPeoples] = useState([]);

    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./data.JSON')
        .then( res => res.json())
        .then( data => setPeoples(data))
    },[]);

    const handleAddToCart = (people) =>{
        const newCart = [...cart, people];
        setCart(newCart);
    }
    return (
        <div className= 'engineer-container'>
            <div className= 'people-container'>
                {
                    peoples.map(people => <People  people={people} handleAddToCart={handleAddToCart}></People>)
                }
            </div>
            <div className= 'cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Engineer;