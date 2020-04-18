# 1989 Movie Project

A small webpage that showcases some of the most popular movies of 1989.
The data for this assignment comes from [The Movie DB](https://www.themoviedb.org) API.

# Objectives

- Work with API data
- Understand and use React components
- Understand and use "props" in React
- Use `Array.prototype.map` to render a collection of components in React

# Includes: 

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS](https://www.w3schools.com/css/)
- [FLEXBOX](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
- [REACT](https://reactjs.org/docs/getting-started.html)
- [NETLIFY](https://docs.netlify.com/?_ga=2.56383019.1272475466.1587169866-1421079835.1583768648)

# Requirements 

- Use the API to fetch the data and render it on the page, rather than the supplied JSON file.
- You should have at _least_ two components; `App` and `Movie`.
- Render at least the title, poster image, and plot overview. Feel free to include other pieces of the data.
- Try to capture an 1980's or early 90's aesthetic when you style your page. Have fun with it!

 
## Live Site

[LIVE SITE](https://1989-movie-project-austinparvin.netlify.app/)

![Color Picker](http://g.recordit.co/NsH4Y2xeEr.gif)

## Featured Code

### App Component

```JSX
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
 ```
 
