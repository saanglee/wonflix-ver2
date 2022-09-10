import React from 'react';
import { useGetMovies } from '../../hooks/queries';
import { Movie } from '../../types/type';
import Card from '../common/Card';

const MovieList = () => {
  const { data: movies } = useGetMovies();
  console.log('movies', movies);

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

export default MovieList;
