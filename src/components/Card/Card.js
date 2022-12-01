import React from 'react';
import './Card.css';

const Card = ({poster, title, rating}) => {
  return (
    <div className='card'>
      <img src={poster} className='poster' alt={'Poster of ' + title}/>  
      <h3>{title}</h3>
      <p>{rating}</p>
    </div>
  )
}

export default Card;