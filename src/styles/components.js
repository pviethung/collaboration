import styled, { css } from 'styled-components';

export const Flex = styled.div`
  ${({ alignItems, justifyContent, direction }) => css`
    display: flex;
    align-items: ${alignItems};
    justify-content: ${justifyContent};
    flex-direction: ${direction};
  `}
`;

export const Form = styled.form`
  input {
    background-color: lightblue;
    border: 0;
  }
`;

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;
