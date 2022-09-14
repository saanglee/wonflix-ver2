import InfiniteScroll from 'react-infinite-scroller';
import { Movie } from '../../@types/type';
import Card from '../../components/Movie/MovieCard';
import useGetMovies from '../../hooks/queries/useGetMovies';

const searchResults = (movies: Movie[]) =>
  movies.filter((movie) => movie.title.includes('Doctor'));

const Home = () => {
  const { data, isLoading, fetchNextPage, hasNextPage } = useGetMovies();
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
      <InfiniteScroll pageStart={1} loadMore={loadMore} hasMore={hasNextPage}>
        {data?.pages.map((page) => {
          return page.data.map((movie: Movie) => {
            return (
              <div key={movie.id}>
                <Card movie={movie} />
              </div>
            );
          });
        })}
      </InfiniteScroll>
    </div>
  );
};

export default Home;
/*
      <InfiniteScroll loadMore={fetchNextPage} hasMore={hasNextPage}>
        {data.pages.map((pageData) => {
          return pageData.results.map((person) => {
            return (
              <Person
                key={person.name}
                name={person.name}
                hairColor={person.hair_color}
                eyeColor={person.eye_color}
              />
            );
          });
        })}
      </InfiniteScroll>
*/
