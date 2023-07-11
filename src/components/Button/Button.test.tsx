import { render, screen } from '@testing-library/react';

import Button from './Button.component';

test('should render Button component', () => {
  render(<Button>Search</Button>);
  const buttonElement = screen.getByTestId('button');
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveTextContent('Search');
});

test('matches snapshot', () => {
  const buttonComponent = render(<Button>Search</Button>);
  expect(buttonComponent).toMatchSnapshot();
});
