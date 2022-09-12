import styled from 'styled-components';
import { Column } from 'styles/common/Column';
import { rounded } from 'styles/variables';

export const StyledLogin = styled.div`
  ${Column} {
    &:first-child {
      display: none;
      max-width: 465px;
      box-shadow: #919eab33 0px 0px 2px 0px, #919eab1f 0px 12px 24px -4px;
      border-radius: ${rounded.lg};
      margin: 16px 0;
      h3 {
        margin: 130px 0px 40px;
        padding: 0 40px;
        font-weight: 700;
        font-size: 2rem;
      }
      img {
        width: 100%;
      }
    }
    &:last-child {
      max-width: 480px;
      margin: 0 auto;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  @media (min-width: 1024px) {
    ${Column} {
      &:first-child {
        display: block;
      }
    }
  }
`;
