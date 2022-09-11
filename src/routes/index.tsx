import { Route, Routes } from 'react-router-dom';
import Detail from '../pages/Detail';
import Bookmark from '../pages/Bookmark';
import MovieList from '../pages/Home';
import Layout from './layout';
import styles from './routes.module.scss';

const App = () => {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MovieList />} />
          <Route path='detail/:id' element={<Detail />} />
          <Route path='Bookmark' element={<Bookmark />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
