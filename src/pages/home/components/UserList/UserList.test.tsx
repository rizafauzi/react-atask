import { render, screen } from '@testing-library/react';

import UserList from './UserList.component';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const userList = (
  <QueryClientProvider client={queryClient}>
    <UserList />
  </QueryClientProvider>
);

test('should render UserList component', () => {
  render(userList);
  const buttonElement = screen.getByTestId('user-list');
  expect(buttonElement).toBeInTheDocument();
});

test('matches snapshot', () => {
  const userListShapshot = render(userList);
  expect(userListShapshot).toMatchSnapshot();
});
