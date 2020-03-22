import React, { Component } from 'react'
import Movie from './components/Movie'

class App extends Component {
  state = {
    movies: [],
  }
  componentDidMount() {
    fetch(
      'https://api.themoviedb.org/3/discover/movie?api_key=37569221602edd820d2cf3580496deaa&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=1989'
    )
      .then((response) => {
        console.log(response)
        return response.json()
      })
      .then((data) => {
        console.log(data.results)
        this.setState({ movies: data.results })
      })
  }
  render() {
    return (
      <main>
        {this.state.movies.map((movie) => (
          <Movie
            movieId={movie.id}
            movieTitle={movie.original_title}
            movieOverview={movie.overview}
            posterPath={movie.poster_path}
          />
        ))}
      </main>
    )
  }
}

export default App
