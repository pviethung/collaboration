import { StyledProjectCard } from 'components/ProjectCard.styles';
import styled from 'styled-components';

export const StyledHome = styled.div`
  padding: 0 40px;
  ${StyledProjectCard} {
    width: calc(33.333% - 15px);
    margin: 0 7.5px;
  }
  > ul {
    display: flex;
    padding: 10px 24px;
    margin: 0 7.5px 40px;
    box-shadow: rgb(145 158 171 / 20%) 0px 0px 2px 0px,
      rgb(145 158 171 / 12%) 0px 12px 24px -4px;
    li {
      &:not(:last-child):not(:first-child) {
        border-right: 2px solid ${({ theme: { preset } }) => preset['100']};
      }
      padding: 0 5px;
      button {
        cursor: pointer;
        border: 0;
        outline: none;
        background-color: #fff;
        &.active {
          font-weight: 700;
          color: ${({ theme: { preset } }) => preset['100']};
        }
      }
    }
  }
`;
