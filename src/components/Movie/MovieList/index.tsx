import { InfiniteData, InfiniteQueryObserverResult } from 'react-query';
import { Movie } from '../../../@types/type';
import Card from '../MovieCard';
import InfiniteScroll from 'react-infinite-scroller';
import styles from './movieList.module.scss';

interface MovieListProps {
  data: InfiniteData<any> | undefined;
  isLoading: boolean;
  hasNextPage: boolean | undefined;
  // fetchNextPage: () => Promise<InfiniteQueryObserverResult>;
  fetchNextPage: () => void;
}

// TODO: 나중에 쓸 거
// const searchResults = (movies: Movie[]) =>
//   movies.filter((movie) => movie.title.includes('Doctor'));

const MovieList = ({
  data,
  isLoading,
  hasNextPage,
  fetchNextPage,
}: MovieListProps) => {
  if (isLoading) return <div className={styles.loading}>Loading...</div>;

  const loadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  return (
    <InfiniteScroll
      pageStart={1}
      loadMore={loadMore}
      hasMore={hasNextPage}
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        maxWidth: '1500px',
        width: '100%',
      }}
    >
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
  );
};

export default MovieList;
