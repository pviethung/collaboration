import styled from 'styled-components';
import { Button } from 'styles/common';
import { rounded } from 'styles/variables';

export const StyledNavbar = styled.nav`
  ul {
    padding: 24px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    li {
      margin-left: 15px;
      a {
        color: ;
      }
    }
    ${Button} {
      height: auto;
      padding: 10px 15px;
      border-radius: ${rounded.sm};
      box-shadow: none;
    }
  }
`;
