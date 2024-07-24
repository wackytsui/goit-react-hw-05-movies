
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'api/movie-api';
import css from './ReviewsList.module.css';

 const ReviewList = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);


  useEffect(() => {
    fetchMovieReviews(movieId).then(setReviews);
  }, [movieId]);
  // console.log(reviews);


  return (
    <div>
      {reviews?.length > 0 ? (
        <ul>
          {reviews.map(({ id, author, created_at, content }) => {
            return (
              <li key={id} className={css.itemHolder}>
                <p className={css.authorName}>Author name: </p><h3 className={css.mainName}>{author}</h3>
                <h4 className={css.createdDate}>{created_at.slice(0, 10)}</h4>
                <p className={css.contentReviews}>{content}</p>
              </li> 
            );
          })}
        </ul>
      ) : (
        <p className={css.warningReviews}>"We don't have any reviews for this movie."</p>
      )}
    </div>
  );
};

export default ReviewList;
