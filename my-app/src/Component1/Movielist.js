import Movie from "./Movie";

const Movielist = (props) => {
    return (
      <ul>
        {props.movies.map((movie) => (
          <Movie key={movie.id}>
            <div>
               {movie.title}
            </div>
            <div>
              {movie.openingText}
            </div>
            <div>
              {movie.releaseDate}
            </div>
          </Movie>
        ))}
      </ul>
    );
  }
  export default Movielist;