import React from 'react';
import Card from '../MovieCard';
import useGetMovies from '../../../hooks/queries/useGetMovies';
import { Movie } from '../../../types/type';

const List = () => {
  const { data: movies } = useGetMovies();

  return (
    <div>
      {movies?.map((movie: Movie) => {
        return (
          <div key={movie.id}>
            <Card movie={movie} />
          </div>
        );
      })}
    </div>
  );
};

export default List;
