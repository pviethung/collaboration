import { useAuthContext } from 'hooks/useAuthContext';
import { useLogout } from 'hooks/useLogout';
import { Link } from 'react-router-dom';
import { Button } from 'styles/common';
import { StyledNavbar } from './Navbar.styles';

const Navbar = () => {
  console.count('[Component <Navbar/> rendered] ');
  const { logout, isError, error } = useLogout();
  const { user } = useAuthContext();
  const logoutHandler = () => {
    logout();
  };

  return (
    <StyledNavbar>
      {isError && <>{JSON.stringify(error)}</>}
      <ul>
        {!user && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </>
        )}
        <li>
          <Button onClick={logoutHandler}>Logout</Button>
        </li>
      </ul>
    </StyledNavbar>
  );
};
export default Navbar;
