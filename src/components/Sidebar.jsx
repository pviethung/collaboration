import { StyledSidebar } from './Sidebar.styles';
import { ReactComponent as Logo } from 'assets/Logo.svg';
import { Flex } from 'styles/common';
import { NavLink } from 'react-router-dom';
import { useAuthContext } from 'hooks/useAuthContext';
import Avatar from './Avatar';

const Sidebar = () => {
  console.count('[Component <Sidebar/> rendered] ');
  const { user } = useAuthContext();
  if (!user) {
    return <></>;
  }

  const { photoURL, displayName } = user;

  return (
    <StyledSidebar>
      <div className="user-greeting-area">
        <Logo />
        <div className="greeting">
          <Flex alignItems="center">
            <Avatar photoURL={photoURL} />
            <h4>Hello, {displayName}</h4>
          </Flex>
        </div>
      </div>
      <ul className="sidebar-nav">
        <li>
          <NavLink to="/">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/create">New Project</NavLink>
        </li>
      </ul>
    </StyledSidebar>
  );
};
export default Sidebar;
