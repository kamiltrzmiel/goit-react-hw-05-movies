import { lazy } from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from './movieList.module.css';

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <ul className={css.listOfMovies}>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <div className={css.card}>
                <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    loading={lazy}
                  />
                  <p className={css.title}>{movie.title}</p>
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MovieList;