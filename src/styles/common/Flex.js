import styled, { css } from 'styled-components';

export const Flex = styled.div`
  ${({ alignItems, justifyContent, direction }) => css`
    display: flex;
    align-items: ${alignItems};
    justify-content: ${justifyContent};
    flex-direction: ${direction};
  `}
`;
