import { Movie } from '../../@types/type';
import Card from '../../components/Movie/MovieCard';
import useGetMovies from '../../hooks/queries/useGetMovies';

const likes = (movies: Movie[]) =>
  movies.filter((movie) => movie.like === true);

const Bookmark = () => {
  const { data: movies } = useGetMovies(likes);

  console.log('moviesBookmarked', movies);

  return (
    <div>
      {/* {movies?.map((movie: Movie) => {
        return (
          <div key={movie.id}>
            <Card movie={movie} />
          </div>
        );
      })} */}
    </div>
  );
};

export default Bookmark;
