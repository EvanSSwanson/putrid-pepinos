import React, { Component } from 'react';
import './SingleMovie.css';

class SingleMovie extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
      isLoading: false,
      error: false
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch(
      `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.movieId}`
    )
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        this.setState({ error: true})
        throw new Error('Something went wrong ...');
      }
    })
      .then((data) => this.setState({ movie: data.movie, isLoading: false}))
  }

  render() {
    if (this.state.isLoading === true) {
      return (
        <h2>Loading...</h2>
      )
    } else if (this.state.error === true) {
      return (
        <h2>This movie's data cannot be found.</h2>
      )
    } else {
      const roundedRating = Math.round(this.state.movie.average_rating * 10) / 10;
      return (
        <div className='movie-details'  style={{
          backgroundImage: `url(${this.state.movie.backdrop_path})`,
          backgroundSize: 'cover' }}>
          <div className='single-movie-container'>
            <h1 className='single-title'>{this.state.movie.title}</h1>
            <div className='content-container'>
              <div className='left-container'>
                <img className='single-poster'
                  src={this.state.movie.poster_path}
                  alt={'Image for' + this.state.movie.title}
                />
                <h2>{this.state.movie.tagline}</h2>
              </div>
              <div className='right-container'>
                <div className='overview-container'>
                  <p className='overview'>{this.state.movie.overview}</p>
                </div>
                <p>Budget: ${this.state.movie.budget}</p>
                <p>Revenue: ${this.state.movie.revenue}</p>
                <p>Runtime: {this.state.movie.runtime} minutes</p>
                <p>Release Date: {this.state.movie.release_date}</p>
                <p>Average Rating: {roundedRating}</p>
                <p>Genres: {this.state.movie.genres}</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default SingleMovie;