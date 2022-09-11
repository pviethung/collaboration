import styled, { css } from 'styled-components';
import { colors, rounded } from 'styles/variables';

export const Button = styled.button`
  width: 100%;
  border: 0;
  border-radius: ${rounded.md};
  height: 48px;
  padding: 8px 22px;
  color: #fff;
  text-align: center;
  ${(p) => css`
    box-shadow: ${p.boxShadow || '#00ab553d'} 0px 8px 16px 0px;
    background-color: ${p.bgColor || colors['green-100']};
  `};
`;
