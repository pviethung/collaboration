import { StyledSidebar } from './Sidebar.styles';
import { ReactComponent as Logo } from 'assets/Logo.svg';
import { Flex } from 'styles/common';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  console.count('[Component <Sidebar/> rendered] ');
  return (
    <StyledSidebar>
      <div className="user-greeting-area">
        <Logo />
        <Flex alignItems="center" className="greeting">
          <img src="https://randomuser.me/api/portraits/men/43.jpg" alt="" />
          <h4>Hello, Hung</h4>
        </Flex>
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
