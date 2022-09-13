import styled from 'styled-components';
import { rounded } from 'styles/variables';

export const StyledSidebar = styled.div`
  width: 280px;
  min-height: 100vh;
  border-right: 1px solid ${({ theme: { common } }) => common.gray['50']};

  .user-greeting-area {
    padding: 24px 20px 16px;
    svg {
      width: 40px;
      height: 40px;
    }
    .greeting {
      margin-top: 20px;
      padding: 16px 20px;
      border-radius: ${rounded.md};
      background-color: ${({ theme: { common } }) => common.gray['0']};
    }
  }

  .sidebar-nav {
    padding: 0 16px;
    margin: 16px 0;
    a {
      border-radius: ${rounded.sm};
      font-size: 0.875rem;
      display: block;
      padding: 16px 12px;
      color: ${({ theme: { common } }) => common.gray['200']};
      &:hover {
        text-decoration: none;
      }
      &.active {
        color: ${({ theme: { preset } }) => preset['100']};
        background-color: ${({ theme: { preset } }) => preset['0']};
      }
    }
  }
`;
