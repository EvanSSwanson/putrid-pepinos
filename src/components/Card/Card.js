import React from 'react';
import './Card.css';

const Card = ({poster, title, rating, viewMovie}) => {
  return (
    <div className='card'>
      <button onClick={() => viewMovie()} className='card-button'>
        <img src={poster} className='poster' alt={'Poster of ' + title}/>  
        <h3>{title}</h3>
        <p>{rating}</p>
      </button>
    </div>
  )
}

export default Card;