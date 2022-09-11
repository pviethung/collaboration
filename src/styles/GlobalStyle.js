import * as styled from 'styled-components';
import { colors } from './variables';
import { normalize } from './normalize';

export const GlobalStyle = styled.createGlobalStyle`
  ${normalize}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.mode['100']};
    color: ${colors.black};
    font-family: 'Public Sans', sans-serif;
  }

  a {
    text-decoration: none;
    &,
    &:focus,
    &:visited {
      color: ${({ theme: { preset } }) => preset['100']};
    }
    &:hover {
      text-decoration: underline;
    }
  }
`;
