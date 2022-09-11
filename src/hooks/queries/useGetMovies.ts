import { useQuery } from 'react-query';
import MovieAPI from '../../api/MovieAPI';
import { Movie } from '../../types/type';

const useGetMovies = () => {
  return useQuery(['movies'], () => MovieAPI.getAll());
};

export default useGetMovies;
