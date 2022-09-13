import styled from 'styled-components';
import { Button } from 'styles/common';
import { rounded } from 'styles/variables';

export const StyledCreate = styled.div`
  max-width: 600px;
  margin: 0 auto 60px;

  ${Button} {
    margin-top: 24px;
    width: max-content;
    border-radius: ${rounded.sm};
  }
`;
