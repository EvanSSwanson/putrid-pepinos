import React, { Fragment } from 'react';
import './SingleMovie.css';


const SingleMovie = ({movie, returnHome}) => {
  const roundedRating = Math.round(movie.average_rating * 10) / 10;
  return (
    <div className="movie-details">
      <header>
          <button onClick={() => returnHome()}>Return Home</button>
        </header>
      <h1>{movie.title}</h1>
      <img src={movie.backdrop_path} alt={'Image for' + movie.title} />
      <img src={movie.poster_path} alt={'Image for' + movie.title} />
      <p>Overview: {movie.overview}</p>
      <p>Genres: {movie.genres}</p>
      <p>Budget: {movie.budget}</p>
      <p>Revenue: {movie.revenue}</p>
      <p>Runtime: {movie.runtime}</p>
      <p>Tagline: {movie.tagline}</p>
      <p>Release Date: {movie.release_date}</p>
      <p>Rating: {roundedRating}</p> 
    </div>
  )
}

export default SingleMovie
