import React, { Children, useState } from 'react';
import { Link } from 'react-router-dom';
import { cx } from '../../styles';
import Button from '../Button';
import Typography from '../Typography';
import styles from './navigation.module.scss';

const pages = ['bookmark', 'latest', 'series', 'movie'];

const Navigation = () => {
  const [openNav, setOpenNav] = useState(false);
  const toggleNav = () => {
    setOpenNav((current) => !current);
  };
  const navMenu = pages.map((page: string) => {
    const menu = page.toUpperCase();
    return (
      <li key={page}>
        <Button
          link={page}
          type={'navigation'}
          children={<Typography children={menu} />}
        />
      </li>
    );
  });

  return (
    <nav className={styles.navContainer}>
      <div className={styles.logoWrapper}>
        <Link to='/'>Logo</Link>
      </div>
      <ul className={cx(styles.navClose, { [styles.navOpen]: openNav })}>
        <Button children={'<'} type={'circle'} onClick={toggleNav} />

        {navMenu}
      </ul>
    </nav>
  );
};

export default Navigation;
