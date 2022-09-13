import styled from 'styled-components';

export const StyledStatusbar = styled.div`
  padding: 70px 20px 24px;
  text-align: right;
  margin-left: auto;
  width: 240px;
  border-left: 1px solid ${({ theme: { common } }) => common.gray['50']};
  li {
    span {
      margin-right: auto;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background-color: ${({ theme: { preset } }) => preset['100']};
    }
    p {
      margin-right: 15px;
    }
    margin-bottom: 15px;
  }
`;
