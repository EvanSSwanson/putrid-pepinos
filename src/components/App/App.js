import React, { Component } from 'react';
import Movies from '../Movies/Movies';
import SingleMovie from '../SingleMovie/SingleMovie';
import './App.css';
import { Route, NavLink } from 'react-router-dom';

const API = 'https://rancid-tomatillos.herokuapp.com/api/v2';
const QUERY = '/movies';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      movie: {},
      isLoading: false,
      error: false,
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch(API + QUERY)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          this.setState({ error: true, isLoading: false })
          throw new Error('Something went wrong ...');
        }
      })
      .then(data => this.setState({ movies: data.movies, isLoading: false }))
      .catch(error => console.log(error));
  }

  render() {
    if (this.state.isLoading === true) {
        return (
        <main className='App'>
          <NavLink to='/' className='home'>
            <h1 className='putrid-title'>Putrid Pepinos</h1>
          </NavLink>
          <h2>Loading...</h2>
        </main>
        )
    } else if (this.state.error === true) {
      return (
        <main className='App'>
        <NavLink to='/' className='home'>
          <h1 className='putrid-title'>Putrid Pepinos</h1>
        </NavLink>
          <h2>There was an error retreiving the movie data.</h2>
        </main>
      )
    } else {
      return (
        <main className='App'>
          <NavLink to='/' className='home'>
            <h1 className='putrid-title'>Putrid Pepinos</h1>
          </NavLink>
          <Route exact path='/' render={() => <Movies movies={this.state.movies} />} />
          <Route exact path='/:id' render={({ match }) => {
              return <SingleMovie movieId={match.params.id}/>;
            }}
          />
        </main>
     )
    }
  }
}


export default App;