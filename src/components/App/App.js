import { render } from '@testing-library/react';
import React, { Component } from 'react';
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
        <h1>Hello</h1>
        {/* <button onClick={() => console.log(this.state.movies)}>🗑</button> */}
      </main>
  )}
}


export default App;
