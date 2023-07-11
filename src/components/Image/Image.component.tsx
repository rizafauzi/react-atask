import { useState } from 'react';

import { ReactComponent as ImageIcon } from '@assets/icons/image.icon.svg';
import { color } from '@styles/color';

interface ImageProps {
  alt: string;
  src: string;
  href?: string;
  width?: number;
  height?: number;
  quality?: number;
  priority?: boolean;
  className?: string;
}

const Image = ({
  alt,
  src,
  className,
  width = 50,
  height = 50,
}: ImageProps) => {
  const [isError, setIsError] = useState(false);

  if (isError) {
    return (
      <ImageIcon
        width={width}
        height={height}
        className="error-image"
        color={color.primary100}
      />
    );
  }

  return (
    <img
      alt={alt}
      src={src}
      width={width}
      height={height}
      data-testid="image"
      className={className}
      onError={() => setIsError(true)}
    />
  );
};

export default Image;
