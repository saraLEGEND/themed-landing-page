export interface Panel {
  id: number;
  front: string;
  back: string;
  turned: boolean;
  hovered: boolean;
  visible: boolean;
}

enum RainbowColors {
  RED = '#FF0000',
  ORANGE = '#FF7F00',
  YELLOW = '#FFFF00',
  GREEN = '#00FF00',
  BLUE = '#0000FF',
  INDIGO = '#4B0082',
  VIOLET = '#9400D3'
}

export const panels: Panel[] = [
  { id: 1, front: 'var(--primary)', back: RainbowColors.RED, turned: false, hovered: false, visible: true },
  { id: 2, front: 'var(--primary)', back: RainbowColors.ORANGE, turned: false, hovered: false, visible: true },
  { id: 3, front: 'var(--primary)', back: RainbowColors.YELLOW, turned: false, hovered: false, visible: true },
  { id: 4, front: 'var(--primary)', back: RainbowColors.GREEN, turned: false, hovered: false, visible: true },
  { id: 5, front: 'var(--primary)', back: RainbowColors.BLUE, turned: false, hovered: false, visible: true },
  { id: 6, front: 'var(--primary)', back: RainbowColors.INDIGO, turned: false, hovered: false, visible: true },
  { id: 7, front: 'var(--primary)', back: RainbowColors.VIOLET, turned: false, hovered: false, visible: true },
  { id: 8, front: 'var(--primary)', back: RainbowColors.RED, turned: false, hovered: false, visible: true },
  { id: 9, front: 'var(--primary)', back: RainbowColors.ORANGE, turned: false, hovered: false, visible: true },
  { id: 10, front: 'var(--primary)', back: RainbowColors.YELLOW, turned: false, hovered: false, visible: true },
  { id: 11, front: 'var(--primary)', back: RainbowColors.GREEN, turned: false, hovered: false, visible: true },
  { id: 12, front: 'var(--primary)', back: RainbowColors.BLUE, turned: false, hovered: false, visible: true },
  { id: 13, front: 'var(--primary)', back: RainbowColors.INDIGO, turned: false, hovered: false, visible: true },
  { id: 14, front: 'var(--primary)', back: RainbowColors.VIOLET, turned: false, hovered: false, visible: true },
  { id: 15, front: 'var(--primary)', back: RainbowColors.RED, turned: false, hovered: false, visible: true },
  { id: 16, front: 'var(--primary)', back: RainbowColors.ORANGE, turned: false, hovered: false, visible: true },
  { id: 17, front: 'var(--primary)', back: RainbowColors.YELLOW, turned: false, hovered: false, visible: true },
  { id: 18, front: 'var(--primary)', back: RainbowColors.GREEN, turned: false, hovered: false, visible: true },
  { id: 19, front: 'var(--primary)', back: RainbowColors.BLUE, turned: false, hovered: false, visible: true },
  { id: 20, front: 'var(--primary)', back: RainbowColors.INDIGO, turned: false, hovered: false, visible: true },
  { id: 21, front: 'var(--primary)', back: RainbowColors.VIOLET, turned: false, hovered: false, visible: true },
  { id: 22, front: 'var(--primary)', back: RainbowColors.RED, turned: false, hovered: false, visible: true },
  { id: 23, front: 'var(--primary)', back: RainbowColors.ORANGE, turned: false, hovered: false, visible: true },
  { id: 24, front: 'var(--primary)', back: RainbowColors.YELLOW, turned: false, hovered: false, visible: true },
  { id: 25, front: 'var(--primary)', back: RainbowColors.GREEN, turned: false, hovered: false, visible: true },
  { id: 26, front: 'var(--primary)', back: RainbowColors.BLUE, turned: false, hovered: false, visible: true },
  { id: 27, front: 'var(--primary)', back: RainbowColors.INDIGO, turned: false, hovered: false, visible: true },
  { id: 28, front: 'var(--primary)', back: RainbowColors.VIOLET, turned: false, hovered: false, visible: true },
  { id: 29, front: 'var(--primary)', back: RainbowColors.RED, turned: false, hovered: false, visible: true },
  { id: 30, front: 'var(--primary)', back: RainbowColors.ORANGE, turned: false, hovered: false, visible: true },
  { id: 31, front: 'var(--primary)', back: RainbowColors.YELLOW, turned: false, hovered: false, visible: true },
  { id: 32, front: 'var(--primary)', back: RainbowColors.GREEN, turned: false, hovered: false, visible: true },
  { id: 33, front: 'var(--primary)', back: RainbowColors.BLUE, turned: false, hovered: false, visible: true },
  { id: 34, front: 'var(--primary)', back: RainbowColors.INDIGO, turned: false, hovered: false, visible: true },
  { id: 35, front: 'var(--primary)', back: RainbowColors.VIOLET, turned: false, hovered: false, visible: true },
  { id: 36, front: 'var(--primary)', back: RainbowColors.RED, turned: false, hovered: false, visible: true }
];
