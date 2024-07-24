import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'api/movie-api';
import { MovieList } from 'components/MovieList/MovieList';
import { Loader } from 'components/Loader/Loader';
import css from './HomePage.module.css';

 const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const movies = await fetchTrendingMovies();
        setTrendingMovies(movies);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
  
  return (
    <div className={css.homePageContainer}>
      <h1 className={css.trending}>Trending Movies</h1>
      {trendingMovies.length === 0 ? (
        <Loader />
      ) : (
        <MovieList movies={trendingMovies} />
      )}
    </div>
  );
};

export default HomePage;