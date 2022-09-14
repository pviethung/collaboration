import { ReactComponent as Logo } from 'assets/Logo.svg';
import { useAuthContext } from 'hooks/useAuthContext';
import { Link, useLocation } from 'react-router-dom';
import { Container, Flex } from 'styles/common';
import { StyledLayout } from './Layout.styles';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Statusbar from './Statusbar';

const Layout = ({ children }) => {
  const { pathname } = useLocation();
  const { user } = useAuthContext();
  let content = '';
  console.count('[Component <Layout/> rendered] ');

  if (pathname === '/login' || pathname === '/signup') {
    content = (
      <>
        <header>
          <Container>
            <Flex justifyContent="space-between">
              <div className="logo-wrap">
                <Logo />
              </div>
              <p className="signup-account">
                Don't have an account?
                <Link style={{ marginLeft: '5px' }} to="/signup">
                  Get started
                </Link>
              </p>
            </Flex>
          </Container>
        </header>
        <main>{children}</main>
      </>
    );
  } else {
    content = (
      <Flex>
        <Sidebar />
        <main>
          <Navbar />
          {children}
        </main>
        {user && <Statusbar />}
      </Flex>
    );
  }

  return <StyledLayout>{content}</StyledLayout>;
};
export default Layout;
