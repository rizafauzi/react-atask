import { render, screen } from '@testing-library/react';

import Text from './Text.component';
import { textSize, textWeight } from './Text.style';

test('should render Text component', () => {
  render(<Text>Lorem Ipsum</Text>);
  const buttonElement = screen.getByTestId('text');
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveTextContent('Lorem Ipsum');
});

test('matches snapshot', () => {
  const textComponent = render(<Text>Lorem Ipsum</Text>);
  expect(textComponent).toMatchSnapshot();
});

test('textWeight returned successfully', () => {
  const selectedWeight = 'bold';
  const weight = textWeight(selectedWeight);
  expect(weight).toBe(`font-${selectedWeight}`);
});

test('textSize returned successfully', () => {
  const selectedSize = 'xsmall';
  const size = textSize(selectedSize);
  expect(size).toBe(`text-${selectedSize}`);
});
