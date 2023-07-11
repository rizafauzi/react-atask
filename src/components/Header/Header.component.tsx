import { styled } from 'styled-components';
import { Text } from '@components';
import { color } from '@styles/color';

const Header = () => {
  return (
    <HeaderWrapper data-testid="header">
      <div className="header-content">
        <Text size="xlarge" weight="bold">
          GitHub Repositories Explorer
        </Text>
      </div>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 60px;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  background: #ffffff5c;
  backdrop-filter: blur(6px);
  border-bottom: solid 1px ${color.line200};

  .header-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    @media only screen and (min-width: 770px) {
      width: 100vw;
      padding: 10px 16px 0px 16px;
    }

    @media only screen and (min-width: 1200px) {
      padding: 0px;
      width: 1200px;
      padding-top: 10px;
    }
  }
`;

export default Header;
