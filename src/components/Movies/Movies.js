import React, { Fragment } from 'react';
import Card from '../Card/Card';
import './Movies.css';
import { NavLink } from "react-router-dom";

const Movies = ({movies, viewMovie}) => {

  const moviesCards = movies.map(movie => {
    const roundedRating = Math.round(movie.average_rating * 10) / 10
    return (
      <div>
        <NavLink to={`${movie.id}`} className="nav">
          <Card
            poster={movie.poster_path}
            title={movie.title}
            rating={'Average Rating: ' + roundedRating}
            viewMovie={viewMovie}
            key={movie.id}
            id={movie.id}
          />
        </NavLink>
      </div>
    )
  })
  
  return (
    <div className='movies-container'>
      {moviesCards}
    </div>
  )
}

export default Movies;