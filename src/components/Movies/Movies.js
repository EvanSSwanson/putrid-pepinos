import React, { Fragment } from 'react';
import Card from '../Card/Card';
import './Movies.css';

const Movies = ({movies}) => {

  const moviesCards = movies.map(movie => {
    const roundedRating = Math.round(movie.average_rating * 10) / 10
    return (
        <Card
        poster={movie.poster_path}
        title={movie.title}
        rating={'Average Rating: ' + roundedRating}
        key={movie.id}
        />
    )
  })

  return (
    <div className='movies-container'>
      {moviesCards}
    </div>
  )
}

export default Movies;