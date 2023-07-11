import { cleanup, render, screen } from '@testing-library/react';

import { IUser } from '@/types/user';

import UserCard from './UserCard.component';

const data: IUser = {
  login: 'rizafauzi',
  id: 46235432,
  node_id: 'MDQ6VXNlcjQ2MjM1NDMy',
  avatar_url: 'https://avatars.githubusercontent.com/u/46235432?v=4',
  gravatar_id: '',
  url: 'https://api.github.com/users/rizafauzi',
  html_url: 'https://github.com/rizafauzi',
  followers_url: 'https://api.github.com/users/rizafauzi/followers',
  following_url:
    'https://api.github.com/users/rizafauzi/following{/other_user}',
  gists_url: 'https://api.github.com/users/rizafauzi/gists{/gist_id}',
  starred_url: 'https://api.github.com/users/rizafauzi/starred{/owner}{/repo}',
  subscriptions_url: 'https://api.github.com/users/rizafauzi/subscriptions',
  organizations_url: 'https://api.github.com/users/rizafauzi/orgs',
  repos_url: 'https://api.github.com/users/rizafauzi/repos',
  events_url: 'https://api.github.com/users/rizafauzi/events{/privacy}',
  received_events_url: 'https://api.github.com/users/rizafauzi/received_events',
  type: 'User',
  site_admin: false,
  score: 1,
};

afterEach(() => {
  cleanup();
});

test('should render UserCard component', () => {
  render(<UserCard key={data.id} data={data} />);
  const buttonElement = screen.getByTestId('user-card');
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveTextContent(data.login);
});

test('matches snapshot', () => {
  const userCard = <UserCard key={data.id} data={data} />;
  expect(userCard).toMatchSnapshot();
});
