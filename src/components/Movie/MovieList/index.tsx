import Card from '../MovieCard';
import useGetMovies from '../../../hooks/queries/useGetMovies';
import { Movie } from '../../../@types/type';
import InfinteScroll from 'react-infinite-scroller';
import { useInfiniteQuery } from 'react-query';

const MovieList = () => {
  const { data: movies } = useGetMovies();

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

export default MovieList;
