import React from 'react';
import './Card.css';

const Card = ({id, poster, title, rating}) => {
  return (
    <div className='card' id={id}>
        <img src={poster} className='poster' alt={'Poster of ' + title}/>  
        <div classname='text-container'>
          <h3>{title}</h3>
          <p>{rating}</p>
        </div>
    </div>
  )
}

export default Card;
