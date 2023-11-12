export const drawerWidth = 260;

export const twitterColor = '#1DA1F2';
export const facebookColor = '#3b5998';
export const linkedInColor = '#0e76a8';

export const HORIZONTAL_MAX_ITEM = 6;
export const DEFAULT_PATH = '/dashboard/default';

export const ThemeMode = {
  LIGHT: 'light',
  DARK: 'dark'
};

export const MenuOrientation = {
  VERTICAL: 'vertical',
  HORIZONTAL: 'horizontal'
};

export const ThemeDirection = {
  LTR: 'ltr',
  RTL: 'rtl'
};

// ==============================|| THEME CONFIG  ||============================== //

const config = {
  fontFamily: `'Public Sans', sans-serif`,
  fontSize: 100,
  i18n: 'en',

  menuOrientation: MenuOrientation.HORIZONTAL,

  miniDrawer: false,

  container: true,

  mode: ThemeMode.LIGHT,

  presetColor: 'default',

  themeDirection: ThemeDirection.LTR
};

export default config;
