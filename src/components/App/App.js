import { render } from '@testing-library/react';
import React, { Component } from 'react';
import Movies from '../Movies/Movies';
import SingleMovie from '../SingleMovie/SingleMovie';
import movieData from '../../movieData.js';
import './App.css';

const API = 'https://rancid-tomatillos.herokuapp.com/api/v2';
const QUERY = '/movies';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      movie: {},
      viewFlag: true,
      isLoading: false,
    }
    this.viewMovie = this.viewMovie.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch(API + QUERY)
      .then(response => response.json())
      .then(data => this.setState({ movies: data.movies, isLoading: false }));
    //this.setState({movies: movieData.movies})
  }

  viewMovie = () => {
    this.setState({viewFlag: false})
    this.setState({movie: movieData.singleMovie})
  }

  returnHome = () => {
    this.setState({viewFlag: true})
  }

  render() {
    return (
      <main className="App">
        <h1>Putrid Pepinos</h1>
        {this.state.viewFlag && <Movies movies={this.state.movies} viewMovie={this.viewMovie} />}
        {!this.state.viewFlag && <SingleMovie movie={this.state.movie} returnHome={this.returnHome} />}
      </main>
   )
  }
}


export default App;
