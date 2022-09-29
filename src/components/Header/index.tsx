import { Link } from 'react-router-dom';
import Button from '../Button';
import Typography from '../Typography';
import SearchInput from '../Search';
import ThemeToggle from '../themeToggle';
import styles from './header.module.scss';
const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <SearchInput />
      <div className={styles.wrapper}>
        <ThemeToggle />
        <Button children={'My Page'} />
      </div>

      {/* <Button
        children={<Typography children={'small'} tag={'div'} type={'B3'} />}
        size={'small'}
      />
      <Button
        children={<Typography children={'default'} tag={'div'} type={'B2'} />}
        size={'default'}
      />
      <Button
        children={<Typography children={'medium'} tag={'div'} type={'B1'} />}
        size={'medium'}
      />
      <Button
        children={<Typography children={'large'} tag={'div'} type={'H2'} />}
        size={'large'}
      />
      <Button
        children={<Typography children={'circle'} tag={'div'} type={'B3'} />}
        type={'circle'}
      /> */}
    </div>
  );
};

export default Header;
