import InfiniteScroll from 'react-infinite-scroller';
import { Movie } from '../@types/type';
import Card from '../components/Movie/MovieCard';
import MovieList from '../components/Movie/MovieList';
import useGetInfiniteMovies from '../hooks/queries/useGetInfiniteMovies';

const searchResults = (movies: Movie[]) =>
  movies.filter((movie) => movie.title.includes('Doctor'));

const Home = () => {
  const { data, isLoading, fetchNextPage, hasNextPage } =
    useGetInfiniteMovies();
  console.log('data', data);

  // const { fetchNextPage, hasNextPage, isLoading } = getMovies;

  if (isLoading) return <div className='loading'>Loading...</div>;

  const loadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  return (
    <div>
      HOME
      <MovieList
        data={data}
        isLoading={isLoading}
        fetchNextPage={loadMore}
        hasNextPage={hasNextPage}
      />
    </div>
  );
};

export default Home;
