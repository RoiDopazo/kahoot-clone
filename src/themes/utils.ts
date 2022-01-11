export const applyTheme = (theme) => {
  const root = document.documentElement;
  Object.keys(theme).forEach((cssVar) => {
    root.style.setProperty(cssVar, theme[cssVar]);
  });
};

export const tw = (...classes: (false | null | undefined | string)[]) => {
  return classes.filter(Boolean).join(' ');
};

export const VARIANTS_MAP = {
  default: 'bg-default text-white',
  black: 'bg-darkGray text-white',
  success: 'bg-success text-white',
  light: 'bg-white-bg text-darkGray'
};
