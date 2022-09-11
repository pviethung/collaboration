import { ReactComponent as Logo } from 'assets/Logo.svg';
import { Container } from 'styles/common';
import { Header } from './Layout.styles';

const Layout = ({ children }) => {
  console.count('[Component <Layout/> rendered] ');
  return (
    <>
      <Header>
        <Container>
          <Logo />
        </Container>
      </Header>
      <main>{children}</main>
    </>
  );
};
export default Layout;
