import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFemale } from '@fortawesome/free-solid-svg-icons';
import './People.css'

const People = (props) => {
    const {name, img, age, salary,designation, country } =(props.people);
    const element = <FontAwesomeIcon icon={faFemale} />

    return (
        <div className='profile'>
            <div>
            <img  className='img' src={img} alt="" />
            <h5>Name: {name}</h5>
            <h5>Dasignation: {designation}</h5>
            <h5>Country: {country}</h5>
            <h5>Age: {age}</h5>
            <h5>Salary: {salary}</h5>
            <button onClick={ () => props.handleAddToCart(props.people)} className='added-cart'>add to cart</button>
            </div>
            <i class="fab fa-facebook-square facebook-icon"></i>
        </div>
    );
};

export default People;