import { render, screen } from '@testing-library/react';

import Header from './Header.component';

test('should render Header component', () => {
  render(<Header />);
  const buttonElement = screen.getByTestId('header');
  expect(buttonElement).toBeInTheDocument();
});

test('matches snapshot', () => {
  const header = render(<Header />);
  expect(header).toMatchSnapshot();
});
