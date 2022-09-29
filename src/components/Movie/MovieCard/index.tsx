import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUpdateLike } from '../../../hooks/queries/useUpdateLike';
import styles from './card.module.scss';

const Card = ({ movie }: any) => {
  const navigate = useNavigate();
  const image = movie.medium_cover_image;
  const title = movie.title;
  const id = movie.id;

  const [isLiked, setIsLiked] = useState<boolean>(movie.like);

  const patchLike = useUpdateLike();

  const updateLike = () => {
    // FIXME: 좋아요 버튼 클릭하면 리렌더링됨
    setIsLiked(!isLiked);
    // patchLike({ id, isLiked });
    console.log(id, isLiked);
  };

  const handleClickCard = () => {
    navigate(`/detail/${movie.id}`);
  };

  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardWrapper} onClick={handleClickCard}>
        <img src={image} alt='' />
        <h2 className={styles.movieTitle}>{title}</h2>
      </div>
      <button type='button' className={styles.bookmark} onClick={updateLike}>
        좋아요
      </button>
    </div>
  );
};

export default Card;
