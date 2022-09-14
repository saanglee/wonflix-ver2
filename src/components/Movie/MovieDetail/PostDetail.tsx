import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Movie, MovieDetail } from '../../../@types/type';

interface PostDetailProps {
  movie: any; // TODO: any 수정
  // getSimilarList: (genre: string) => void;
  // handleLoad: (key: string) => void;
}

const PostDetail: React.FC<PostDetailProps> = ({ movie }) => {
  const navigate = useNavigate();
  const {
    id,
    title,
    year,
    runtime,
    genres,
    like,
    rating,
    medium_cover_image,
    description_full,
  }: MovieDetail = movie;

  return (
    <div>
      <button type='button' onClick={() => navigate(-1)}>
        뒤로가기
      </button>
      <img src={medium_cover_image} alt='' />
      <h2 className='movie_title'>{title}</h2>
      <p className='movie_year'>{year}</p>
      <p className='movie_runtime'>{runtime}분</p>
      <p className='movie_genre'>{genres}</p>
      <p className='movie_rating'>{rating}점</p>
      <p className='movi_description'>{description_full}</p>
      <input type='checkbox' className='favorite' />
    </div>
  );
};

export default PostDetail;
