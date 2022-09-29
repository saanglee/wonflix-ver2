import { atom } from 'recoil';

export enum ThemeEnums {
  LIGHT = 'light',
  DARK = 'dark',
}
const { LIGHT, DARK } = ThemeEnums;

const theme = localStorage.getItem('theme');

export const getTheme = (): ThemeEnums => {
  if (theme === DARK) return DARK;
  return LIGHT; // localStorage에 있는 값이 DARK가 아니라면, 모든 경우에 LIGHT를 return 함
};

export const themeState = atom<ThemeEnums>({
  key: 'themeState',
  default: getTheme(), // 기본값은 localStorage에 있는 값에 따름
});
