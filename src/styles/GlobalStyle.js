import * as styled from 'styled-components';
import { normalize } from './normalize';

export const GlobalStyle = styled.createGlobalStyle`
  ${normalize}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    color: ${({ theme }) => {
      console.log(theme.name);
      if (theme.name === 'light') {
        return styled.css`
          ${theme.common.gray['200']}
        `;
      }
    }};
    background-color: ${({ theme }) => theme.mode['100']};
    font-family: 'Public Sans', sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${({ theme: { mode } }) => mode['contrast-100']};
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

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;
