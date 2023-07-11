import { useCallback, useState } from 'react';
import { styled } from 'styled-components';

import { IUser } from '@/types/user';
import { Image } from '@components';
import { color } from '@styles/color';
import { ReactComponent as ArrowIcon } from '@assets/icons/arrow.icon.svg';

import RepoList from '../RepoList';

interface UserCardProps {
  data: IUser;
  className?: string;
}

const UserCard = ({ className, data }: UserCardProps) => {
  const { login, avatar_url } = data;
  const [isShowRepo, setIsShowRepo] = useState(false);

  const toggleShowRepo = useCallback(() => setIsShowRepo(prev => !prev), []);

  return (
    <UserCardWrapper data-testid="user-card" className={className}>
      <button className="label" onClick={toggleShowRepo}>
        <div className="avatar">
          <Image
            width={30}
            alt={login}
            height={30}
            quality={0.5}
            src={avatar_url}
            className="rounded-full"
          />
          <h4>{login}</h4>
        </div>
        <ArrowIcon
          width={20}
          height={20}
          color="black"
          className={isShowRepo ? 'arrow-expand' : 'arrow-collapse'}
        />
      </button>
      {isShowRepo && (
        <div className="repo-content">
          <RepoList name={login} />
        </div>
      )}
    </UserCardWrapper>
  );
};

const UserCardWrapper = styled.div`
  .label {
    width: 100%;
    display: flex;
    border-radius: 8px;
    padding: 12px 18px;
    align-items: center;
    transition: all 0.2s ease-out;
    justify-content: space-between;
    outline: solid 0px transparent;
    border: solid 0.5px ${color.line200};

    .arrow-expand {
      transition: all 0.2s ease-out;
      transform: rotate(180deg);
    }

    .arrow-collapse {
      transition: all 0.2s ease-out;
      transform: rotate(0deg);
    }

    .avatar {
      gap: 12px;
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    &:hover {
      cursor: pointer;
      background: ${color.primary50};
      outline: solid 1px ${color.primary300};
    }
  }

  .repo-content {
    padding-top: 8px;
    padding-left: 24px;
  }
`;

export default UserCard;
