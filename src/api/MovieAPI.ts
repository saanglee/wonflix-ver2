import { Movie } from '../@types/type';
import axiosInstance from './axios';

const MovieAPI = {
  getAll: async (pageParam?: number) => {
    const { data } = await axiosInstance.get(`/movies?_page=${pageParam}`);
    if (pageParam) {
      return { data, next: pageParam + 1, totalPage: data.length };
    }
    return data;
  },
  getById: async (id: number): Promise<{ data: Movie }> => {
    const { data } = await axiosInstance.get<{ data: Movie }>(`/movies/${id}`);
    return data;
  },
  getInBookmark: () => {},

  updateLike: async (id: number, like: boolean): Promise<Movie[]> => {
    const { data } = await axiosInstance.patch<Movie[]>(`/movies/${id}`, {
      like: !like,
    });
    console.log('like');
    return data;
  },
};

export default MovieAPI;
