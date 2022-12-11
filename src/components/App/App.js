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
      viewFlag: true,
      isLoading: false,
      error: false,
    }
    this.viewMovie = this.viewMovie.bind(this);
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

  viewMovie = (id) => {
    fetch(API + QUERY + "/" + id )
      .then(response => response.json())
      .then(data => this.setState({ movie: data.movie, isLoading: false }));

    this.setState({viewFlag: false})
  }

  returnHome = () => {
    this.setState({viewFlag: true})
  }

  render() {
    return (
      <main className="App">
        <h1 className='putrid-title'>Putrid Pepinos</h1>
        <Route exact path="/" render={() => <Movies movies={this.state.movies} viewMovie={this.viewMovie} />} />
        <Route exact path="/:id" render={({ match }) => {
            return <SingleMovie movieId={match.params.id}/>;
          }}
        />
      </main>
   )
  }
}


export default App;