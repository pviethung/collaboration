import Avatar from 'components/Avatar';
import styled from 'styled-components';
import { Button, Form } from 'styles/common';
import { rounded } from 'styles/variables';

export const StyledProjectDetails = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 0 20px;

  .project-details {
    flex: 1;
    margin-right: 20px;

    > div {
      > p:first-of-type {
        font-size: 0.875rem;
      }
      > p:last-of-type {
        margin: 20px 0 40px;
      }
      ul {
        margin-top: 20px;
      }

      padding: 24px;
      border-radius: ${rounded.md};
      box-shadow: rgb(145 158 171 / 20%) 0px 0px 2px 0px,
        rgb(145 158 171 / 12%) 0px 12px 24px -4px;
    }
    > button {
      width: max-content;
      margin-top: 20px;
    }
  }

  .comment-list {
    li {
      box-shadow: rgb(145 158 171 / 20%) 0px 0px 2px 0px,
        rgb(145 158 171 / 12%) 0px 12px 24px -4px;
      padding: 24px;
      margin-bottom: 24px;
      > h4 {
        font-weight: 700;
      }
      > span {
        margin-top: 10px;
        display: block;
        font-size: 0.875rem;
      }
      > p {
        margin-top: 30px;
      }
    }

    img {
      width: 30px;
      height: 30px;
    }
  }
  ${Form} {
    ${Button} {
      width: max-content;
      margin: 20px auto 0;
      display: block;
      box-shadow: none;
    }
  }
`;
