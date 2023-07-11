import { render, screen } from '@testing-library/react';

import Image from './Image.component';

test('should render Image component', () => {
  render(
    <Image
      width={30}
      height={30}
      quality={0.5}
      alt="rizafauzi"
      className="rounded-full"
      src="https://avatars.githubusercontent.com/u/46235432?v=4"
    />
  );
  const image = screen.getByTestId('image');
  expect(image).toBeInTheDocument();
});

test('matches snapshot', () => {
  const image = render(
    <Image
      width={30}
      height={30}
      quality={0.5}
      alt="rizafauzi"
      className="rounded-full"
      src="https://avatars.githubusercontent.com/u/46235432?v=4"
    />
  );
  expect(image).toMatchSnapshot();
});
