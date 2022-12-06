import React, { Component } from 'react';
import Movies from '../Movies/Movies';
import SingleMovie from '../SingleMovie/SingleMovie';
import './App.css';
import { NavLink, Route } from 'react-router-dom';


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
        <nav>
          
        </nav>
        <h1>Putrid Pepinos</h1>
        <Route exact path="/movies" render={ () => <Movies movies={this.state.movies} viewMovie={this.viewMovie}/>}/>
        {/* {this.state.viewFlag && <Movies movies={this.state.movies} viewMovie={this.viewMovie} />} */}
        {!this.state.viewFlag && <SingleMovie movie={this.state.movie} returnHome={this.returnHome} />}
      </main>
  )}
}


export default App;


// const {isLoading, error} = this.state;
//     if (error) {
//       return <p>Something went wrong</p>;
//     }
//     if (isLoading) {
//       return <p>Loading ...</p>;
//     }
//     return (
//       <main className="App">
//         <nav>

//         </nav>
//         <h1>Putrid Pepinos</h1>
//         {this.state.viewFlag && <Movies movies={this.state.movies} viewMovie={this.viewMovie} />}
//         {!this.state.viewFlag && <SingleMovie movie={this.state.movie} returnHome={this.returnHome} />}
//       </main>
//    )