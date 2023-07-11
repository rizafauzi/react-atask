export interface IColor {
  primary50: string;
  primary100: string;
  primary300: string;
  primary500: string;
  text50: string;
  text100: string;
  text300: string;
  text500: string;
  line100: string;
  line200: string;
  white: string;
  black: string;
  bgBase: string;
  error500: string;
}

export type ColorType =
  | 'primary50'
  | 'primary100'
  | 'primary300'
  | 'primary500'
  | 'text100'
  | 'text300'
  | 'text500'
  | 'text50'
  | 'line100'
  | 'line200'
  | 'black'
  | 'white'
  | 'error500';
