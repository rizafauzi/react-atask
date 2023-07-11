import { useCallback, useState } from 'react';
import { styled } from 'styled-components';
import { Link, useNavigate, useNavigation, useParams } from 'react-router-dom';

import { ReactComponent as MagnifierIcon } from '@assets/icons/magnifier.icon.svg';
import { Button, Header, Input, Layout, Text } from '@components';
import { color } from '@styles/color';

import UserList from './components/UserList';

const HomePage = () => {
  const navigate = useNavigate();
  const { keyword: submittedKeyword } = useParams();
  const [keyword, setKeyword] = useState(submittedKeyword || '');

  const handleDiscardSearch = useCallback(
    () => navigate('/', { replace: true }),
    [navigate]
  );

  return (
    <Layout>
      <Header />
      <Wrapper>
        <div className="search-section">
          <Input
            value={keyword}
            className="w-full"
            onChange={setKeyword}
            onDiscard={handleDiscardSearch}
          />
          <Link to={`/${keyword}`} replace>
            <Button className="w-full">
              <Text color="white">Search</Text>
              <MagnifierIcon
                width={20}
                height={20}
                color="white"
                className="ml-2"
              />
            </Button>
          </Link>
        </div>
        {submittedKeyword && (
          <Text color="text300" className="mt-3">
            Showing users for "{submittedKeyword}"
          </Text>
        )}
        <hr className="mt-3 mb-6" />
        <UserList />
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div`
  .search-section {
    gap: 10px;
    display: grid;
    grid-template-columns: 100%;

    @media only screen and (min-width: 770px) {
      grid-template-columns: calc(100% - 210px) 200px;
    }
  }

  .user-list {
    gap: 12px;
    display: flex;
    margin: 12px 0px;
    flex-direction: column;
  }

  .loader-card {
    width: 100%;
    display: flex;
    border-radius: 8px;
    padding: 12px 18px;
    align-items: center;
    transition: all 0.2s ease-out;
    justify-content: space-between;
    outline: solid 0px transparent;
    border: solid 0.5px ${color.line100};
  }

  .data-empty {
    width: 100%;
    display: flex;
    padding: 50px;
    border-radius: 8px;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    border: solid 0.5px ${color.line100};
  }

  .search {
    color: ${color.white};
  }
`;

export default HomePage;
