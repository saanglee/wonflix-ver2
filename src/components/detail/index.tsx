import React from 'react';

const Detail = () => {
  // img, title, year, runtime, like, genres, rating, summary
  return (
    <div>
      <img src='' alt='' />
      <h2 className='movie_title'></h2>
      <p className='movie_year'></p>
      <p className='movie_runtime'></p>
      <p className='movie_genre'></p>
      <p className='movie_rating'></p>
      <p className='movi_summary'></p>
      <input type='checkbox' className='favorite' />
    </div>
  );
};

export default Detail;
