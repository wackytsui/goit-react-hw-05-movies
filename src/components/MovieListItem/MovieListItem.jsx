import { useLocation, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './MovieListItem.module.css';

export const MovieListItem = ({ id, title, posterPath, votes }) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/w500';
  const location = useLocation();
  const path = location.pathname === '/movies' ? `${id}` : `/movies/${id}`;

  return (
    <li className={css.movieListItem}>
      <Link
        className={css.link}
        // to={`/movies/${id}`}
        to={path}
        state={{ from: `${location.pathname + location.search}` }}
      >
        <div className={css.fosterContainer}>
        <img className={css.fosterImage} src={BASE_URL + posterPath} alt={`${title}`} />
        <h4 className={css.movieTitle}>{title}</h4>
          <h5>{votes}</h5>
        </div>
      </Link>
    </li>
  );
};

MovieListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  posterPath: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
};