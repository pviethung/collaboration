import styled, { css } from 'styled-components';

export const Column = styled.div`
  ${({ width }) => css`
    width: calc(${width || 1} * 100%);
  `}
`;
