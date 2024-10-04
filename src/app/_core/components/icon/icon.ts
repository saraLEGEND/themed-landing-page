export type Size = 'xsmall' | 'small' | 'medium' | 'large' | 'fill';

type IconMap = {
  [key: string]: string;
}

export const path = '../../../../assets/icons/';

export const icons: IconMap = {
  'candy-mode': 'candy-mode.svg',
  'dark-mode': 'dark-mode.svg',
  'light-mode': 'light-mode.svg'
};
