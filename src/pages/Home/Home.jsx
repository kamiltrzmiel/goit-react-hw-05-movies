import MovieList from 'components/MovieList/MovieList';
import { fetchTrendingMovies } from 'services/api';
import { useEffect, useState } from 'react';
import css from './home.module.css';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(res => setTrendingMovies(res));
  }, []);

  if (!trendingMovies) return;

  return (
    <>
      <header>
        <div className={css.homeHeader}>
          <h1>Trending today</h1>
        </div>
      </header>
      <main>{trendingMovies && <MovieList movies={trendingMovies} />}</main>
    </>
  );
}

export default Home;