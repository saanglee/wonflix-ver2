import { getMovieData } from './../api/httpRequest';
import { useQuery } from '@tanstack/react-query';

export const useGetMovies = () => {
  return useQuery(['hotels'], () => getMovieData());
};
