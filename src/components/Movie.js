import React, { Component } from 'react'

class Movie extends Component {
  render() {
    return (
      <section className="movie-card">
        <header className="movie-title">Title</header>
        <img src="https://image.tmdb.org/t/p/w185_and_h278_bestv2/4p1N2Qrt8j0H8xMHMHvtRxv9weZ.jpg" />
        <p className="plot-description">
          Lorem blahsdkfv;a efas fea gdaegra evafsa eaf rea ieafa l.
          fewaerasfewa ewafewaf esafesaf esafesaf esafesa.
        </p>
      </section>
    )
  }
}

export default Movie
