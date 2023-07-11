import { styled } from 'styled-components';

import { useFetchRepositories } from '@services/repository';
import { ReactComponent as StarIcon } from '@assets/icons/star.icon.svg';
import { Text } from '@components';
import { color } from '@styles/color';

import { ReactComponent as CodeIcon } from '@assets/icons/code.icon.svg';
import { ReactComponent as ErrorIcon } from '@assets/icons/error.icon.svg';

interface RepoListProps {
  name: string;
}

const RepoList = ({ name }: RepoListProps) => {
  const { data, isLoading, isError } = useFetchRepositories(name);

  if (isLoading) {
    const loaderArr = Array.from({ length: 3 });
    return (
      <div data-testid="repo-list">
        {loaderArr.map((_, index) => (
          <RepoCard key={index}>
            <div className="w-full animate-pulse flex-row items-center justify-center py-1">
              <div className="repo-label">
                <div className="h-5 w-32 rounded-md bg-gray-300 " />
                <div className="star">
                  <div className="h-5 w-10 rounded-md bg-gray-300 " />
                  <StarIcon height={20} width={20} color="black" />
                </div>
              </div>
              <hr />
              <div className="h-5 w-48 rounded-md bg-gray-300 " />
            </div>
          </RepoCard>
        ))}
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="data-empty" data-testid="repo-list">
        <ErrorIcon height={100} width={100} color={color.error500} />
        <Text className="mt-4" color="text500">
          Ooops... Something Wrong
        </Text>
      </div>
    );
  }

  if (data?.length === 0) {
    return (
      <div className="data-empty" data-testid="repo-list">
        <CodeIcon height={100} width={100} color={color.primary100} />
        <Text className="mt-4" color="text500">
          Repository is empty
        </Text>
      </div>
    );
  }

  return (
    <div data-testid="repo-list">
      {data.map(item => (
        <RepoCard className="repo-card" key={item.id}>
          <div className="repo-label">
            <Text weight="semibold">{item.name}</Text>
            <div className="star">
              <Text>{item.stargazers_count}</Text>
              <StarIcon height={20} width={20} color="black" />
            </div>
          </div>
          <>
            <hr />
            <Text color="text300">{item.description || '-'}</Text>
          </>
        </RepoCard>
      ))}
    </div>
  );
};

const RepoCard = styled.div`
  margin-top: 8px;
  padding: 12px 18px;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;
  outline: solid 0.5px ${color.line100};

  .repo-label {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .star {
      display: flex;
      flex-direction: row;
      gap: 8px;
      align-items: center;
    }
  }

  hr {
    width: 100%;
    margin: 8px 0px;
    border: solid 0.5px ${color.line100};
  }

  &:hover {
    cursor: pointer;
    background: ${color.primary50};
    outline: solid 1px ${color.primary300};

    hr {
      border: solid 0.5px ${color.primary100};
    }
  }
`;

export default RepoList;
