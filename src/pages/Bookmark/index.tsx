import { Movie } from '../../@types/type';
import Card from '../../components/Movie/MovieCard';
import useGetMovies from '../../hooks/queries/useGetMovies';

// const likes = (movies: any) => {
//   console.log(movies);
//   return movies.filter((movie: any) => movie.like === true);
// };

const likes = (movies: any) => {
  return movies.pages.map((page: any) => {
    return page.data.filter((movie: Movie) => movie.like === true);
  });
};

const Bookmark = () => {
  const { data } = useGetMovies(likes);

  // console.log('movies', movies);

  return (
    <div>
      {/* {movies?.pages.map((page) => {
        return page.data.map((movie: Movie) => {
          return (
            <div key={movie.id}>
              <Card movie={movie} />
            </div>
          );
        });
      })} */}
    </div>
  );
};

export default Bookmark;
