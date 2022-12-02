import React, { Fragment } from 'react';
import './SingleMovie.css';


const SingleMovie = ({movie, returnHome}) => {
  return (
    <div className="movie-details">
      <header>
          <button onClick={() => returnHome()}>Return Home</button>
        </header>
      <h1>{movie.title}</h1>
      <img src={movie.backdrop_path} alt={'Image for' + movie.title} />
      <img src={movie.poster_path} alt={'Image for' + movie.title} />
      <p>{movie.overview}</p>
      <p>{movie.genres}</p>
      <p>{movie.budget}</p>
      <p>{movie.revenue}</p>
      <p>{movie.runtime}</p>
      <p>{movie.tagline}</p>
      <p>{movie.release_date}</p>
      <p>{movie.rating}</p> 
    </div>
  )
}

export default SingleMovie
