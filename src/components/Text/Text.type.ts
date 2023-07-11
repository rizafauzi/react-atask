import { ColorType } from '@/types/color';

export type TextSizeType =
  | 'xsmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'xlarge'
  | 'xxlarge';

export type TextTagType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'span'
  | 'p'
  | 'label'
  | 'th'
  | 'td';

export type TextWeightType = 'bold' | 'semibold' | 'normal';

export interface IText {
  ellipsis?: boolean;
  color?: ColorType;
  className?: string;
  size?: TextSizeType;
  weight?: TextWeightType;
  children?: React.ReactNode;
  tag?: TextTagType;
  dangerouslySetInnerHTML?: {
    __html: string;
  };
}
