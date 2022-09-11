// img, title, year, runtime, like, genres, rating, summary
import { useParams } from 'react-router-dom';
import useGetMovieById from '../../hooks/queries/useGetMovieById';
import { Movie } from '../../types/type';
import PostDetail from '../../components/Movie/MovieDetail/PostDetail';

interface DetailProps {
  movie: Movie;
  // getSimilarList: (genre: string) => void;
  // handleLoad: (key: string) => void;
}

const Detail = () => {
  const { id } = useParams() as unknown as { id: number };
  const { data, isLoading } = useGetMovieById(id);

  if (isLoading) return <h3>Loading...</h3>;
  return (
    <div>
      <PostDetail movie={data} />
    </div>
  );
};

export default Detail;
