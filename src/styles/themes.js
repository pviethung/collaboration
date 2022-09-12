const modes = {
  light: {
    100: '#fff',
  },
  dark: {
    100: '#212b36',
    200: '#161c24',
  },
};

const presets = {
  green: {
    50: '#00ab553d',
    100: '#00ab55',
    200: '#007b55',
  },
};

const common = {
  black: '#212b36',
  white: '#fff',
  gray: {
    100: '#919eab52',
    200: '#637381',
  },
};

export const getTheme = (mode, preset) => ({
  mode: modes[mode],
  preset: presets[preset],
  common: common,
});
