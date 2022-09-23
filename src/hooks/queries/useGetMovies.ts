import { useQuery, useInfiniteQuery } from 'react-query';
import MovieAPI from '../../api/MovieAPI';
import queryKeys from '../../react-query/queryKey';

const useGetMovies = (filter?: any) => {
  return useQuery(['movies'], () => MovieAPI.getAll(), {
    select: filter,
  });
};

export default useGetMovies;
