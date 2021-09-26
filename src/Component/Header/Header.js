import React from 'react';
import './Header.css';

const Header = (data) => {
    return (
        <div className="header-container">
            <h1>Top 10 Engineers In World</h1>
            <p>AI and the future of engineering: an interview with Hugo Malagon</p>
            <h1>Total Salay: 150 Million</h1>
            <h2>people:{data.length}</h2>
        </div>
    );
};

export default Header;