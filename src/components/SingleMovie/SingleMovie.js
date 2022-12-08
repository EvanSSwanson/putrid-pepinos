import React, { Component } from "react";
import "./SingleMovie.css";
import { NavLink } from "react-router-dom";

class SingleMovie extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
    };
  }

  componentDidMount() {
    fetch(
      `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.movieId}`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ movie: data.movie }));
  }

  render() {
    const roundedRating = Math.round(this.state.movie.average_rating * 10) / 10;
    return (
      <div className="movie-details">
        <header>
          <NavLink to="/" className="nav">
            <button className="return-button">Return Home</button>
          </NavLink>
        </header>
        <h1>{this.state.movie.title}</h1>
        <img className="backdrop"
          src={this.state.movie.backdrop_path}
          alt={"Image for" + this.state.movie.title}
        />
        <img className="poster"
          src={this.state.movie.poster_path}
          alt={"Image for" + this.state.movie.title}
        />
        <p>Overview: {this.state.movie.overview}</p>
        <p>Genres: {this.state.movie.genres}</p>
        <p>Budget: ${this.state.movie.budget}</p>
        <p>Revenue: ${this.state.movie.revenue}</p>
        <p>Runtime: {this.state.movie.runtime} minutes</p>
        <p>Tagline: {this.state.movie.tagline}</p>
        <p>Release Date: {this.state.movie.release_date}</p>
        <p>Rating: {roundedRating}</p>
      </div>
    );
  }
}

export default SingleMovie;