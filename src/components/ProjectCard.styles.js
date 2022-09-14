import styled from 'styled-components';
import { rounded } from 'styles/variables';

export const StyledProjectCard = styled.div`
  padding: 24px;
  cursor: pointer;
  border-radius: ${rounded.md};
  box-shadow: rgb(145 158 171 / 20%) 0px 0px 2px 0px,
    rgb(145 158 171 / 12%) 0px 12px 24px -4px;
  h4 {
    color: ${({ theme: { preset } }) => preset['100']};
  }
  p {
    color: ${({ theme: { common } }) => common.gray['200']};
    font-size: 0.875rem;
  }
  a:hover {
    text-decoration: none;
  }
`;
