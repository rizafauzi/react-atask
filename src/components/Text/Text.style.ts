export const textWeight = (weight: string) => {
  switch (weight) {
    case 'bold':
      return 'font-bold';
    case 'normal':
      return 'font-normal';
    case 'semibold':
      return 'font-semibold';
    default:
      break;
  }
};

export const textSize = (size: string) => {
  switch (size) {
    case 'xsmall':
      return 'text-xsmall';
    case 'small':
      return 'text-small';
    case 'medium':
      return 'text-medium';
    case 'large':
      return 'text-large';
    case 'xlarge':
      return 'text-xlarge';
    case 'xxlarge':
      return 'text-xxlarge';
    default:
      break;
  }
};
