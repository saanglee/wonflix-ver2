import { Like } from '../hooks/queries/useUpdateLike';
import { Movie } from '../@types/type';
import axiosInstance from './axios';

const MovieAPI = {
  getAll: async (pageParam: number) => {
    const { data } = await axiosInstance.get(
      // `/movies?_page=${pageParam}&_limit=10`
      `/movies?_page=${pageParam}`
    );
    console.log(data);
    return { data, next: pageParam + 1, totalPage: data.length };
  },
  getById: async (id: number): Promise<{ data: Movie }> => {
    const { data } = await axiosInstance.get<{ data: Movie }>(`/movies/${id}`);
    return data;
  },
  getInBookmark: () => {},

  updateLike: async ({ id, like }: Like): Promise<Movie[]> => {
    const { data } = await axiosInstance.patch<Movie[]>(`/movies/${id}`, {
      like: !like,
    });
    return data;
  },
};

export default MovieAPI;

/*
export const patchMovieFavorite = (id: number, favorite: boolean) => {
  serverApi
    .patch(`/${id}`, { like: !favorite })
    .catch((error) => console.log(error));
};

    update: async ({
    toDoId,
    title,
    content,
    authToken,
  }: ToDoMutationStateWithId): Promise<{ data: ToDoData }> => {
    const { data } = await clientApi.put<{ data: ToDoData }>(
      `/todos/${toDoId}`,
      { title, content },
      {
        headers: {
          Authorization: authToken,
        },
      }
    );
    return data;
  },

*/
