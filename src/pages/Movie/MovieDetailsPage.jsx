import { useEffect, useState, useRef, Suspense } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from 'api/movie-api';
import { Loader } from 'components/Loader/Loader';
import css from './MovieDetailsPage.module.css';
import { TbArrowBackUpDouble } from "react-icons/tb";



const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from || '/');

  useEffect(() => {
    (async () => {
      try {
        const movie = await fetchMovieDetails(movieId);
        setMovieDetails(movie);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [movieId]);

  if (!movieDetails) {
    return  <Loader/>;
  }

  return (
    <>
      <div className={css.backArrow}>
      <Link to={backLinkHref.current} >
        <TbArrowBackUpDouble />
        </Link>
      </div>

      <div className={css.movieDetailsContainer}>
        <img
          className={css.image}
          src={ movieDetails.poster_path ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}` : `https://fakeimg.pl/450x500/13e5f0/000?text=No+Image&font=lobster`}
          alt={movieDetails.title}
        />
        <div className={css.movieDetailsWrap}>
          <h1 className={css.mainTitle}>{movieDetails.title}</h1>
          <h4 className={css.userScore}>User score:   <span className={css.percent}>{Math.round(movieDetails.vote_average * 10)}%</span></h4>
           <h2>Genres</h2>
           <p className={css.genreDetails}>
            {movieDetails.genres.map(genre => (
              <span key={genre.id}> {genre.name}</span>
            ))}
          </p>
          <h2>Overview</h2>
          <p className={css.contentOverview}>{movieDetails.overview}</p>
        </div>
      </div>

     
      
      <h2 className={css.movieInfo}>Additional information</h2>
      <div className={css.infoBtn}>
      <Link to="cast" className={css.movieCast}>
        Cast
      </Link>

      <Link to="reviews" className={css.movieReviews}>
        Reviews
      </Link>
      </div>
  

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  ); 
};

export default MovieDetailsPage;