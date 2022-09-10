import { getMovieData, getResultByKeyword } from './../api/httpRequest';
import { useQuery } from 'react-query';

export const useGetMovies = () => {
  return useQuery(['movies'], () => getMovieData());
};

export const useSearchMovie = (keyword: string) => {
  return useQuery(['movies', keyword], () => getResultByKeyword(keyword), {
    enabled: !!keyword,
  });
};
