import { Link } from 'react-router-dom';
import SearchInput from '../Search';

const Navigation = () => {
  return (
    <div>
      <div>
        <Link to='/'>Logo</Link>
      </div>
      <div>
        <SearchInput />
      </div>
      <div>
        <Link to='bookmark'>BOOKMARK</Link>
      </div>
    </div>
  );
};

export default Navigation;
