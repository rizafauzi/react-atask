import 'styled-components';

interface Theme {
  colors: {
    'bg-base': string;

    'primary-500': string;
    'primary-300': string;
    'primary-100': string;

    'text-50': string;
    'text-100': string;
    'text-300': string;
    'text-500': string;
    'line-100': string;
    // Add more color properties as needed
  };
  // Add more theme properties as needed
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
