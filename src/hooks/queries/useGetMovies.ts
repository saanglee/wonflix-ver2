import { useQuery, useInfiniteQuery } from 'react-query';
import MovieAPI from '../../api/MovieAPI';
import { Movie } from '../../@types/type';
import queryKeys from '../../react-query/queryKey';

const useGetMovies = (filter?: any) => {
  return useInfiniteQuery(
    [queryKeys.movie],
    ({ pageParam = 1 }) => MovieAPI.getAll(pageParam),
    {
      getNextPageParam: (currentPage) => {
        return currentPage.next > currentPage.totalPage
          ? null
          : currentPage.next;
      },
      select: filter,
    }
  );
};

export default useGetMovies;
