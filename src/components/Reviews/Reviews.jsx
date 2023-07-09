import { fetchReviewsById } from 'services/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from '../Reviews/reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    if (!movieId) return;

    fetchReviewsById(movieId).then(reviews => {
      setReviews(reviews);
    });
  }, [movieId]);

  return (
    <div>
      {reviews.length > 0 ? (
        <>
          <ul className={css.reviewList}>
            {reviews.map(item => {
              return (
                <li key={item.id}>
                  <h2>{item.author}</h2>
                  <p>{item.content}</p>
                </li>
              );
            })}
          </ul>
        </>
      ) : (
        <h3>There are no reviews yet</h3>
      )}
    </div>
  );
}

export default Reviews;