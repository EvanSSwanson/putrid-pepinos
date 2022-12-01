import { render } from '@testing-library/react';
import React, { Component } from 'react';
import Movies from '../Movies/Movies';
import movieData from '../../movieData.js';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    this.setState({movies: movieData.movies})
  }

  render() {
    return (
      <main className="App">
        <h1>Putrid Pepinos</h1>
        <Movies movies={this.state.movies}/>
      </main>
  )}
}


export default App;
