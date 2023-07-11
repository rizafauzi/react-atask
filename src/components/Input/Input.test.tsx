import { fireEvent, render, screen } from '@testing-library/react';

import Input from './Input.component';

const setup = () => {
  const utils = render(<Input />);
  const input: HTMLInputElement = screen.getByTestId('input');
  return {
    input,
    ...utils,
  };
};

test('should render Input component', () => {
  const value = 'Lorem Ipsum';
  const onChange = (string: string) => {
    console.info('test: ', string);
  };

  render(<Input value={value} onChange={onChange} />);
  const buttonElement = screen.getByTestId('input');
  expect(buttonElement).toBeInTheDocument();
});

test('It should change the value of the input', () => {
  const { input } = setup();
  fireEvent.change(input, { target: { value: 'rizafauzi' } });
  expect(input.value).toBe('rizafauzi');
});

test('It should allow value be deleted', () => {
  const { input } = setup();
  fireEvent.change(input, { target: { value: 'rizafauzi' } });
  expect(input.value).toBe('rizafauzi');
  fireEvent.change(input, { target: { value: '' } });
  expect(input.value).toBe('');
});

test('matches snapshot', () => {
  const value = 'Lorem Ipsum';
  const onChange = (string: string) => {
    console.info('test: ', string);
  };

  const input = render(<Input value={value} onChange={onChange} />);
  expect(input).toMatchSnapshot();
});
