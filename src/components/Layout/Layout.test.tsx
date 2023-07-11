import { render, screen } from '@testing-library/react';

import Layout from './Layout.component';

test('should render Header component', () => {
  render(
    <Layout>
      <h4>children</h4>
    </Layout>
  );
  const layout = screen.getByTestId('layout');
  expect(layout).toBeInTheDocument();
  expect(layout).toContainHTML('<h4>children</h4>');
});

test('matches snapshot', () => {
  const header = render(
    <Layout>
      <h4>children</h4>
    </Layout>
  );
  expect(header).toMatchSnapshot();
});
