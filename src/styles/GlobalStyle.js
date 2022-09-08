import * as styled from 'styled-components';
import { normalize } from './normalize';

const GlobalStyle = styled.createGlobalStyle`
  ${normalize}

  body {
    font-family: 'Public Sans', sans-serif;
    color: red;
    font-size: 40px;
  }
`;

export default GlobalStyle;
