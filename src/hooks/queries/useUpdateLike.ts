import { Movie } from '../../types/type';
import { UseMutateFunction, useMutation, useQueryClient } from 'react-query';
import MovieAPI from '../../api/MovieAPI';
import queryKeys from '../../react-query/queryKey';

export interface Like {
  id: number;
  like: boolean;
}
export const useUpdateLike = (): UseMutateFunction<
  Movie[],
  unknown,
  Like,
  unknown
> => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    ({ id, like }: Like) => MovieAPI.updateLike({ id, like }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.bookmark]);
      },
    }
  );
  return mutate;
};
