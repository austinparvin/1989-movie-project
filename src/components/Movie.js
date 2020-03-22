import React, { Component } from 'react'

class Movie extends Component {
  render() {
    return (
      <section className="movie-card" key={this.props.movieId}>
        <header className="movie-title">{this.props.movieTitle}</header>
        <img
          src={
            'https://image.tmdb.org/t/p/w185_and_h278_bestv2' +
            this.props.posterPath
          }
        />
        <p className="plot-description">{this.props.movieOverview}</p>
      </section>
    )
  }
}

export default Movie
