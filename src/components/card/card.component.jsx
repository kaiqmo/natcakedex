import React from 'react';
import './card.styles.css';

export const Card = (props) =>{
    return <div className="card-container">
        <img className="img" alt="cake" src= {require('./img/'+props.cake.image)} />
        <h2 key={props.cake.id}> {props.cake.name}</h2>
        <p>{props.cake.username}</p>
    </div>
}