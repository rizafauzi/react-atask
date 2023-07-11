import { useState } from 'react';

import { ReactComponent as ImageIcon } from '@assets/icons/image.icon.svg';
import { color } from '@styles/color';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import classnames from 'classnames';

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
    <LazyLoadImage
      alt={alt}
      src={src}
      width={width}
      effect="blur"
      height={height}
      data-testid="image"
      onError={() => setIsError(true)}
      className={classnames(className, 'overflow-hidden')}
    />
  );
};

export default Image;
