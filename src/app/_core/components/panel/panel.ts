export interface Panel {
  id: number;
  turned: boolean;
  hovered: boolean;
  visible: boolean;
  bounce: boolean;
}

/**
 * The panels that will be shown in the panel component.
 * Make sur it is a multiple of 6.
 */
export const generatePanels = (count: number): Panel[] => {
  const panels: Panel[] = [];
  for (let i = 0; i < count; i++) {
    panels.push({
      id: i + 1,
      turned: false,
      hovered: false,
      visible: false,
      bounce: false
    });
  }
  return panels;
};
