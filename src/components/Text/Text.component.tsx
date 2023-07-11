import { IText } from './Text.type';
import { textSize, textWeight } from './Text.style';
import { color as colors } from '@styles/color';

const Text = ({
  tag,
  className = '',
  size = 'medium',
  weight = 'normal',
  color = 'text500',
  children,
}: IText) => {
  const Tag = tag || 'p';

  return (
    <Tag
      data-testid="text"
      style={{
        color: colors[color],
      }}
      className={`
        ${className} 
        ${textSize(size)} 
        ${textWeight(weight)} 
      `}
    >
      {children}
    </Tag>
  );
};

export default Text;
