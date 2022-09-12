import { Link } from 'react-router-dom';
import { Button } from 'styles/common';
import { StyledNavbar } from './Navbar.styles';

const Navbar = () => {
  console.count('[Component <Navbar/> rendered] ');
  return (
    <StyledNavbar>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Button href="/logout">Logout</Button>
        </li>
      </ul>
    </StyledNavbar>
  );
};
export default Navbar;
