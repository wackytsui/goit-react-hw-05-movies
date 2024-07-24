import PropTypes from 'prop-types';
import { MovieListItem } from 'components/MovieListItem/MovieListItem';
import css from './MovieList.module.css';

export const MovieList = ({ movies }) => {
  return (
    <ul className={css.movieList}>
      {movies.map(({ id, title, poster_path, vote_average }) => (
        <MovieListItem
          key={id}
          id={id}
          title={title}
          posterPath={poster_path}
          vote={vote_average}
        />
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string.isRequired,
      vote_average: PropTypes.number.isRequired,
    })
  ),
};