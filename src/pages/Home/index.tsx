import { Movie } from '../../types/type';
import Card from '../../components/Movie/MovieCard';
import useGetMovies from '../../hooks/queries/useGetMovies';

const MovieList = () => {
  const { data: movies } = useGetMovies();
  console.log('movies', movies);

  return (
    <div>
      {movies?.map((movie: Movie) => {
        return (
          <div key={movie.id}>
            <Card movie={movie} />
          </div>
        );
      })}
    </div>
  );
};

export default MovieList;

// 모든 투두 리스트 가져오기
// const { data: toDoList } = useGetToDoList(authToken, {
//   onError: () => {
//     useToastMessage(TOAST_MESSAGE.AUTH.ONLY_LOGIN, "error");
//   },
// });
