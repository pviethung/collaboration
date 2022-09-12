import styled, { css } from 'styled-components';

export const Flex = styled.div`
  ${({ alignItems, justifyContent, direction, gap }) => css`
    display: flex;
    gap: ${gap};
    align-items: ${alignItems};
    justify-content: ${justifyContent};
    flex-direction: ${direction};
  `}
`;
