import axios from 'axios';

const BASE_URL = 'http://localhost:8000';

export const getMovieData = () =>
  axios.get(`${BASE_URL}/movies`).then((response) => response.data);
