import { ReactComponent as Logo } from 'assets/Logo.svg';
import { Link } from 'react-router-dom';
import { Container, Flex } from 'styles/common';
import { Header } from './Layout.styles';

const Layout = ({ children }) => {
  console.count('[Component <Layout/> rendered] ');
  return (
    <>
      <Header>
        <Container>
          <Flex justifyContent="space-between">
            <div className="logo-wrap">
              <Logo />
            </div>
            <p className="signup-account">
              Don't have an account?
              <Link to="/signup">Get started</Link>
            </p>
          </Flex>
        </Container>
      </Header>
      <main>{children}</main>
    </>
  );
};
export default Layout;
