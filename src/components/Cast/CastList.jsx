import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'api/movie-api';
import { CastListItem } from 'components/CastListItem/CastListItem';
import css from './CastList.module.css';

const CastList = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetchMovieCast(movieId);
        setCast(response);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [movieId]);

  return (
    <>
      {cast.length !== 0 && (
        <div>
          <h2 className={css.castLabel}>Movie Cast</h2>
          <ul className={css.castList}>
            {cast.map(({ id, profile_path, original_name, name }) => (
              <CastListItem
                key={id}
                id={id}
                profilePath={profile_path }
                originalName={original_name}
                name={name}
              />
            ))}
          </ul>
        </div>
      )}
      {cast.length === 0 && <div className={css.notifyCast}>We don't have any cast for this movie.</div>}
    </>
  );
};

export default CastList;