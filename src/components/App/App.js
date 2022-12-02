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
      movie: {}
    }
  }

  componentDidMount() {
    this.setState({movies: movieData.movies})
    this.setState({movie: movieData.singleMovie})
  }

  render() {
    // return (
    //   <main className="single-movie">
    //     <SingleMovie movie={this.state.movie} />
    //   </main>
    // )
    return (
      <main className="App">
        <h1>Putrid Pepinos</h1>
        <Movies movies={this.state.movies}/>
      </main>
  )
  }
}


export default App;
