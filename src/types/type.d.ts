interface MovieCard {
  title: string;
  medium_cover_image: string;
}

interface Movie extends MovieCard {
  id: number;
  year: number;
  rating: number;
  runtime: number;
  genres: string[];
  summary: string;
  description_full: string;
  yt_trailer_code: string;
  language: string;
  mpa_rating: string;
  background_image: string;
  background_image_original: string;
  large_cover_image: string;

  like: boolean;
}

export { Movie, MovieCard };
