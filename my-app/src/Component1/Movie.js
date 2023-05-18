import classes from './Movies.module.css';

const Movie = (props) => {
    return (
      <li className={classes.movies}>
        <h2>{props.children[0]}</h2>
        <h3>{props.children[1]}</h3>
        <p>{props.children[2]}</p>
      </li>
    );
  }
  export default Movie;
  