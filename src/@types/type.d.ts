declare module 'react-infinite-scroller';

export interface MovieDetail {
  id: number;
  title: string;
  year: number;
  like: boolean;
  runtime: number;
  genres: string[];
  rating: number;
  description_full: string;
  background_image: string;
  medium_cover_image: string;
}

export interface Movie {
  id: number;
  imdb_code: string;
  title: string;
  title_english: string;
  title_long: string;
  slug: string;
  year: number;
  rating: number;
  runtime: number;
  genres: Array<string>;
  summary: string;
  description_full: string;
  synopsis: string;
  yt_trailer_code: string;
  language: string;
  map_rating: string;
  background_image: string;
  background_image_original: string;
  small_cover_image: string;
  medium_cover_image: string;
  large_cover_image: string;
  state: string;
  date_uploaded: string;
  date_uploaded_unix: number;
  like: boolean;
}

export { Movie, MovieDetail };
