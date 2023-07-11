import { render, screen } from '@testing-library/react';

import RepoList from './RepoList.component';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const repoList = (
  <QueryClientProvider client={queryClient}>
    <RepoList name="rizafauzi" />
  </QueryClientProvider>
);

test('should render RepoList component', () => {
  render(repoList);
  const buttonElement = screen.getByTestId('repo-list');
  expect(buttonElement).toBeInTheDocument();
});

test('matches snapshot', () => {
  const repoListShapshot = render(repoList);
  expect(repoListShapshot).toMatchSnapshot();
});
