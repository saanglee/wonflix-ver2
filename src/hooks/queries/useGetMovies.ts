import { useQuery } from 'react-query';
import MovieAPI from '../../api/MovieAPI';
import { Movie } from '../../types/type';

const useGetMovies = (filter?: any) => {
  return useQuery(['movies'], () => MovieAPI.getAll(), {
    select: filter,
  });
};

export default useGetMovies;
