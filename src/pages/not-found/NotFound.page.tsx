import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

import { ReactComponent as BrokenLinkIcon } from '@assets/icons/broken.icon.svg';
import { Button, Header, Layout, Text } from '@components';
import { color } from '@styles/color';

const NotFoundPage = () => {
  return (
    <Layout>
      <Header />
      <Wrapper>
        <BrokenLinkIcon height={200} width={200} className="my-10" />
        <Text color="text300" className="mt-3">
          Page is Not Found
        </Text>
        <hr className="mt-3 mb-10" />
        <Link to="/">
          <Button>
            <Text color="white" className="mx-10">
              Back to Home
            </Text>
          </Button>
        </Link>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
    border: solid 1px ${color.line100};
  }

  .data-empty {
    width: 100%;
    display: flex;
    padding: 50px;
    border-radius: 8px;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    border: solid 1px ${color.line100};
  }

  .search {
    color: ${color.white};
  }
`;

export default NotFoundPage;
