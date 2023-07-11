import HomePage from '@pages/home';
import { Header, Layout } from '@components';

const Root = () => {
  return (
    <>
      <Layout>
        <Header />
        <HomePage />
      </Layout>
    </>
  );
};

export default Root;
