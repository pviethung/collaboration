import styled, { css } from 'styled-components';
import { rounded } from 'styles/variables';

export const Button = styled.button`
  width: 100%;
  border: 0;
  border-radius: ${rounded.md};
  cursor: pointer;
  height: 48px;
  padding: 8px 22px;
  color: #fff;
  text-align: center;
  ${({ theme: { preset } }) => css`
    box-shadow: ${preset['50']} 0px 8px 16px 0px;
    background-color: ${preset['100']};
  `};
`;
