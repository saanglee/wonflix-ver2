import { useRecoilState } from 'recoil';

import styles from './themeToggle.module.scss';
import { ThemeEnums, themeState } from '../../store/themeState';

const ThemeToggle = () => {
  const [theme, setTheme] = useRecoilState<ThemeEnums>(themeState);
  const { LIGHT, DARK } = ThemeEnums;
  const isLight = ThemeEnums.LIGHT;

  const toggleTheme = () => {
    if (theme === DARK) {
      localStorage.setItem('theme', LIGHT);
      setTheme(LIGHT);
      return;
    }

    localStorage.setItem('theme', DARK);
    setTheme(DARK);
  };

  return (
    <button
      onClick={toggleTheme}
      className={theme === isLight ? styles.lightToggle : styles.darkToggle}
    >
      <span className={styles.toggleSlider}></span>
    </button>
  );
};

export default ThemeToggle;
