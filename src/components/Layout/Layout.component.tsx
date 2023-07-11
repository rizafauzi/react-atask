import { styled } from 'styled-components';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutWrapper data-testid="layout">
      <div className="layoutContent">{children}</div>
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.div`
  margin: 0px;
  padding: 0px;
  display: flex;
  margin-top: 60px;
  min-height: 100vh;
  justify-content: center;

  .layoutContent {
    padding-top: 10px;

    @media only screen and (max-width: 1204px) {
      width: 100vw;
      overflow: hidden;
      padding: 24px 16px;
    }

    @media only screen and (min-width: 1204px) {
      width: 1200px;
      padding: 24px 16px;
    }
  }
`;

export default Layout;
