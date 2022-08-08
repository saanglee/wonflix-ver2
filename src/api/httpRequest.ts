import axios from 'axios';

const BASE_URL = 'http://localhost:8000';

export const getMovieData = () =>
  axios.get(`${BASE_URL}/movies`).then((response) => response.data);

export const getResultByKeyword = (keyword: string) => {
  axios
    .get(`${BASE_URL}/movies?query=${keyword}`)
    .then((response) => response.data);
};
