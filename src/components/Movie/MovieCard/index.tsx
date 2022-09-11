import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUpdateLike, Like } from '../../../hooks/queries/useUpdateLike';
import Button from '../../Button';
import styles from './card.module.scss';

// import styles from './tmp.module.scss';
// <div assName={styles.title}>Tmp</div>;
const Card = ({ movie }: any) => {
  const navigate = useNavigate();
  const CARD_IMAGE = movie.medium_cover_image;
  const TITLE = movie.title;
  console.log(movie.id, movie.like);
  const [isLiked, setIsLiked] = useState<boolean>(movie.like);

  const patchLike = useUpdateLike();

  const updateLike = ({ id, like }: Like) => {
    patchLike({ id, like });
  };

  const handleClickCard = () => {
    navigate(`/detail/${movie.id}`);
  };

  return (
    <div>
      <div className='card_wrapper' onClick={handleClickCard}>
        <img src={CARD_IMAGE} alt='' />
        <h2 className={styles.movie_title}>{TITLE}</h2>
      </div>
      <input type='checkbox' className={styles.favorite} />
      <button type='button' onClick={() => updateLike}>
        좋아요
      </button>
    </div>
  );
};

export default Card;
