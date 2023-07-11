import { useParams } from 'react-router-dom';

import { color } from '@styles/color';
import { Text } from '@components';
import { useSearchUsers } from '@services/user';

import { ReactComponent as ErrorIcon } from '@assets/icons/error.icon.svg';
import { ReactComponent as GithubIcon } from '@assets/icons/github.icon.svg';
import { ReactComponent as EmptyFolderIcon } from '@assets/icons/empty-folder.icon.svg';

import UserCard from '../UserCard';

const UserList = () => {
  const { keyword } = useParams();
  const { data, isLoading, isError } = useSearchUsers(keyword || '');

  if (!keyword) {
    return (
      <div className="data-empty" data-testid="user-list">
        <GithubIcon height={100} width={100} color={color.primary100} />
        <Text className="mt-4" color="text500">
          Search Github User
        </Text>
      </div>
    );
  }

  if (isLoading) {
    const loaderArr = Array.from({ length: 3 });
    return (
      <div className="user-list" data-testid="user-list">
        {loaderArr.map((_, index) => (
          <div className="loader-card" key={index}>
            <div className="w-full animate-pulse flex-row items-center justify-center">
              <div className="flex flex-col space-y-1">
                <div className="flex flex-row items-center space-x-2">
                  <div className="h-8 w-8 rounded-full bg-gray-300 " />
                  <div className="h-5 w-32 rounded-md bg-gray-300 " />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="data-empty" data-testid="user-list">
        <ErrorIcon height={100} width={100} color={color.error500} />
        <Text className="mt-4" color="text500">
          Ooops... Something Wrong
        </Text>
      </div>
    );
  }

  if (keyword && data?.length === 0) {
    return (
      <div className="data-empty" data-testid="user-list">
        <EmptyFolderIcon height={100} width={100} color={color.primary100} />
        <Text className="mt-4" color="text500">
          User is not found
        </Text>
      </div>
    );
  }

  return (
    <div className="user-list" data-testid="user-list">
      {data.map(item => (
        <UserCard key={item.id} data={item} />
      ))}
    </div>
  );
};

export default UserList;
