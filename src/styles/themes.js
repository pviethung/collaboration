const modes = {
  light: {
    100: '#fff',
    'contrast-100': '#212b36',
  },
  dark: {
    100: '#212b36',
    200: '#161c24',
    'contrast-100': '#fff',
  },
};

const presets = {
  green: {
    0: '#00ab5514',
    50: '#00ab553d',
    100: '#00ab55',
    200: '#007b55',
  },
};

const common = {
  black: '#212b36',
  white: '#fff',
  gray: {
    0: '#919eab1f',
    50: '#919eab3d',
    100: '#919eab52',
    200: '#637381',
  },
};

export const getTheme = (mode, preset) => ({
  name: mode,
  mode: modes[mode],
  preset: presets[preset],
  common: common,
});
