import React from 'react';
import { useGetMovies } from '../../hooks/queries';
import { Movie } from '../../types/type';
import Card from '../common/Card';

const Favorites = () => {
  const { data: movies } = useGetMovies();
  return (
    <div>
      <div>
        {movies?.map((movie: Movie) => {
          return (
            <div key={movie.id}>
              <Card
                title={movie.title}
                medium_cover_image={movie.medium_cover_image}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Favorites;
