import { Movie } from './../../types/type.d';
import { UseMutateFunction, useMutation, useQueryClient } from 'react-query';
import MovieAPI from '../../api/MovieAPI';
import queryKeys from '../../react-query/queryKey';

export const useUpdateBookmark = (
  id: number
): UseMutateFunction<Movie[], unknown, boolean, unknown> => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    (like: boolean) => MovieAPI.updateBookmark(id, like),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.bookmark]);
      },
    }
  );
  return mutate;
};
