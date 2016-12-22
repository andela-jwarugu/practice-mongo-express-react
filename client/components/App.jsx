import React from 'react';
import request from 'superagent';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      filtertext: 'all',
      movies: [],
      genres: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.loadMovies = this.loadMovies.bind(this);
    this.loadGenres = this.loadGenres.bind(this);
  }

  componentDidMount() {
    this.loadMovies();
    this.loadGenres();
  }

  handleChange(event) {
    const filter = event.target.value
    this.setState({filtertext: filter})
  }

  loadMovies() {
    request
      .get('http://localhost:3000/api/movies')
      .end((err, res) => {
        this.setState({movies: res.body})
      })
  }

  loadGenres() {
    request
      .get('http://localhost:3000/api/genres')
      .end((err, res) => {
        this.setState({genres: res.body})
      })
  }

  handleSearch() {
  }

  render () {
    console.log(this.state);
    return (
      <div>
        <div className='text-xs-center'>
          <h4>Movie Search</h4>
        </div><br/>
        <div className='row'>
        <div className='col-md-4' style={{marginTop: '.5em'}}>
          <select onChange={this.handleChange} style={{float: 'right'}} >
            <option value='all'>All</option>
            <option value='title'>Find by title</option>
            <option value='genre'>Find by genre</option>
          </select>
          </div>
          <div className='col-md-4'>
          <div className='input-group'>
            <input
                type='text'
                className='form-control'
                placeholder='Search for movie by title or genre' />
            <span className='input-group-btn'>
              <button className='btn btn-secondary' onClick={this.handleSearch} type='button'>Search</button>
            </span>
          </div>
        </div>
        </div>
        <br/>
        <hr />

        <div className='row col-md-10 offset-md-1'>
          <div className='col-md-5'>
          <div className='card'>
            <div className='card-block'>
              <h5 className='card-title'> Categories </h5>
            </div>
            <ul className='list-group list-group-flush'>
              {this.state.genres.map((genre) => (
                  <li className='list-group-item' key={genre._id}>{genre.title}</li>
              ))}
            </ul>
            <div className='card-block'>
              <button className='btn-primary btn'> Add categories </button>
            </div>
          </div>
          </div>
          <div className='col-md-5'>
          <div className='card' style={{marginLeft: 20}}>
            <div className='card-block' >
              <h5 className='card-title'> Movies </h5>
            </div>
            <ul className='list-group list-group-flush'>
              {this.state.movies.map((movie) => (
                  <li className='list-group-item' key={movie._id}>{movie.title}</li>
              ))}
            </ul>
            <div className='card-block'>
              <button className='btn-primary btn'> Add movie </button>
            </div>
          </div>
          </div>



        </div>

      </div>
    )
  }
}
// <div className='card card-block col-md-3' style={{marginLeft: 10}}>
//
//   {this.state.movies.map((movie) => (
//     <div>
//     <h5 className='card-title'>
//       {movie.title}
//     </h5>
//     <span className='card-text'>
//       {movie.description}
//     </span>
//     </div>
//   ))}
//
//
// </div>
