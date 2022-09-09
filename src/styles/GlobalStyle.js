import * as styled from 'styled-components';
import { normalize } from './normalize';

export const GlobalStyle = styled.createGlobalStyle`
  ${normalize}

  body {
    font-family: 'Public Sans', sans-serif;
  }
`;
