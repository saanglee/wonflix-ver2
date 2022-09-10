import { Route, Routes } from 'react-router-dom';
import Detail from '../components/detail';
import Favorites from '../components/favorites';
import MovieList from '../components/home';
import Layout from './layout';
import styles from './routes.module.scss';

const App = () => {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MovieList />} />
          <Route path='detail' element={<Detail />} />
          <Route path='favorites' element={<Favorites />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
