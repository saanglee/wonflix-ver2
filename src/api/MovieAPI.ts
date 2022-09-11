import { Movie } from '../types/type';
import axiosInstance from './axios';

const MovieAPI = {
  getAll: async (): Promise<Movie[]> => {
    const { data } = await axiosInstance.get<Movie[]>('/movies');
    return data;
  },
  getById: async (id: number): Promise<{ data: Movie }> => {
    const { data } = await axiosInstance.get<{ data: Movie }>(`/movies/${id}`);
    return data;
  },
  getByKeyword: () => {},
  getInFavorite: () => {},

  updateBookmark: async (id: number, like: boolean): Promise<Movie[]> => {
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
