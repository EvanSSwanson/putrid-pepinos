import { render } from '@testing-library/react';
import React, { Component } from 'react';
import Movies from '../Movies/Movies';
import SingleMovie from '../SingleMovie/SingleMovie';
import movieData from '../../movieData.js';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      movie: {},
      viewFlag: true
    }
    this.viewMovie = this.viewMovie.bind(this);
  }

  componentDidMount() {
    this.setState({movies: movieData.movies})
  }

  viewMovie() {
    this.setState({viewFlag: false})
    this.setState({movie: movieData.singleMovie})
  }

  render() {
    return (
      <main className="App">
        <h1>Putrid Pepinos</h1>
        {this.state.viewFlag && <Movies movies={this.state.movies} viewMovie={this.viewMovie}/>}
        {!this.state.viewFlag && <SingleMovie movie={this.state.movie} />}
      </main>
  )
  }
}


export default App;
