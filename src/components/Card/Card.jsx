import React from 'react';
import "./card.css"

const Card = ({item}) => {
    console.log(item);
    return (
        <div>
            <h2>{item.model}</h2>
            <img className='car-image' src={item.image} alt="" />
        </div>
    );
};

export default Card;