import { useEffect, useState } from 'react';
import { fetchMovieByQuery } from 'api/movie-api';
import { MovieList } from 'components/MovieList/MovieList';
import {
  Outlet,
  useSearchParams,
  useNavigate,
  useParams,
} from 'react-router-dom';
import css from './MoviesPage.module.css';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? 'Friends'; // Default search query is 'Friends'

  const { movieId } = useParams();
  console.log('movieId', movieId);

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      if (!movieName.trim()) return;
      setIsLoading(true);

      try {
        const movies = await fetchMovieByQuery(movieName);

        console.log('movies', movies);
        setMovies(movies);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [movieName]);

  const handleNavigate = (replace = false) => {
    console.log('Navigating to /test with replace:', replace);
    navigate('/test', { replace });
  };

  return (
    <div>
      <div className={css.inputWrapper}>
        <input
          type="text"
          className={css.input}
          onChange={e => updateQueryString(e.target.value)}
          placeholder="Search movies..."
        />
        {/* Removed the button since the search updates automatically with the input */}
      </div>
      <div className={css.buttonWrapper}>
        <button onClick={() => handleNavigate(false)}>
          Navigate with replace=false
        </button>
        <button onClick={() => handleNavigate(true)}>
          Navigate with replace=true
        </button>
      </div>
      {isLoading ? (
        <p style={{ textAlign: 'center' }}>Loading...</p>
      ) : (
        <MovieList movies={movies} />
      )}
      <Outlet />
    </div>
  );
};

export default MoviesPage;