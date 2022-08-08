import MovieList from '../components/movieList/MovieList';
import SearchForm from '../components/search/SearchForm';

const App = () => {
  return (
    <div className='App'>
      <div>메인</div>
      <SearchForm />
      <MovieList />
    </div>
  );
};

export default App;
