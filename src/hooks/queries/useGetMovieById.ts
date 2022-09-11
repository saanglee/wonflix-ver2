import { useQuery, UseQueryOptions } from 'react-query';
import MovieAPI from '../../api/MovieAPI';
import { Movie } from '../../types/type';

const useGetMovieById = (
  id: number,
  options?: UseQueryOptions<{ data: Movie }, Error>
) => {
  return useQuery<{ data: Movie }>(['movie', id], () => MovieAPI.getById(id));
};

useGetMovieById.getKey = (id: number) => ['movie', id];

export default useGetMovieById;
