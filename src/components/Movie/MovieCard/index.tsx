import { useNavigate } from 'react-router-dom';
import styles from './card.module.scss';

// import styles from './tmp.module.scss';
// <div assName={styles.title}>Tmp</div>;
const Card = ({ movie }: any) => {
  const navigate = useNavigate();
  console.log('movie');
  const CARD_IMAGE = movie.medium_cover_image;
  const TITLE = movie.title;
  // img, title, checkbox

  const handleClickCard = () => {
    navigate(`/detail/${movie.id}`);
  };

  return (
    <div onClick={handleClickCard}>
      <img src={CARD_IMAGE} alt='' />
      <h2 className={styles.movie_title}>{TITLE}</h2>
      <input type='checkbox' className={styles.favorite} />
    </div>
  );
};

export default Card;
