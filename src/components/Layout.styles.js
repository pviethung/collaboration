import styled from 'styled-components';

export const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 24px 8px;

  svg {
    width: 40px;
    height: 40px;
  }

  .signup-account {
    display: none;
    font-size: 0.875rem;
  }
  @media (min-width: 1024px) {
    padding: 56px 40px 0;
    .signup-account {
      display: block;
    }
  }
`;
