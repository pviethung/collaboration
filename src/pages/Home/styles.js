import { StyledProjectCard } from 'components/ProjectCard.styles';
import styled from 'styled-components';

export const StyledHome = styled.div`
  padding: 0 40px;
  ${StyledProjectCard} {
    width: calc(33.333% - 15px);
    margin: 0 7.5px;
  }
`;
