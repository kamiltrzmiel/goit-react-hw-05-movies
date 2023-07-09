import { fetchCastById } from 'services/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState('');
  const { movieId } = useParams();
  useEffect(() => {
    if (!movieId) return;

    fetchCastById(movieId).then(cast => {
      setCast(cast);
    });
  }, [movieId]);

  if (!cast) return;

  return (
    <>
      <ul className={css.castList}>
        {cast &&
          cast.map(item => {
            return (
              <li className={css.castItem} key={item.id}>
                {item.profile_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                    alt={item.name}
                    width="300"
                    loading='lazy'
                  />
                )}
                <p>{item.name}</p>
                <p>
                <span>Character:</span> {item.character}
                </p>
              </li>
            );
          })}
      </ul>
    </>
  );
}

export default Cast;