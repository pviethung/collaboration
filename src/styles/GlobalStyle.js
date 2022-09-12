import * as styled from 'styled-components';
import { normalize } from './normalize';
import { rounded } from './variables';

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

  .react-select-container {
    height: 56px;
  }
  .react-select__control {
    border-radius: ${rounded.sm} !important;
    height: 56px;
    border-color: ${({ theme: { common } }) => common.gray['100']} !important;
    box-shadow: none !important;
  }
  .react-select__control--is-focused {
    border: 2px solid ${({ theme: { preset } }) => preset['100']} !important;
  }
  .react-select__value-container {
    height: 56px;
    padding-top: 0 !important;
    padding-left: 14px !important;
  }
  .react-select__placeholder {
    color: #919eab !important;
  }
  .react-select__input-container {
    height: 56px;
    margin: 0 !important;
    padding: 0 !important;
  }
`;
