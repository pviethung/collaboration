import styled, { css } from 'styled-components';
import { rounded, transitionDuration } from 'styles/variables';

export const Form = styled.form`
  .form-group {
    position: relative;
    + .form-group {
      margin-top: 24px;
    }
    label {
      position: absolute;
      top: 50%;
      left: 11.5px;
      transform: translateY(-50%) scale(1);
      transform-origin: left;
      transition: all ${transitionDuration};
      color: #919eab;
      font-size: 1rem;
      pointer-events: none;
      background-color: #fff;
      padding: 0 5px;
    }
    input {
      width: 100%;
      height: 56px;
      padding: 16.5px 14px;
      border-radius: ${rounded.md};
      border: 1px solid ${({ theme: { common } }) => common.gray['100']};
      ${({ theme: { preset } }) => css`
        :focus {
          outline-color: ${preset['100']};
          & + label {
            color: ${preset['100']};
            transform: translateY(calc(-100% - 16.5px)) scale(0.75);
          }
        }
      `}
    }
  }
  .form-desc {
    margin-bottom: 40px;
    h4 {
      font-size: 1.25rem;
      margin-top: 0;
      margin-bottom: 8px;
    }
    p {
      color: ${({ theme: { common } }) => common.gray['200']};
      margin: 0;
    }

    @media (min-width: 1024px) {
      h4 {
        font-size: 1.5rem;
        line-height: 1.5;
      }
    }
  }
  .form-checkbox-wrap {
    font-size: 14px;
  }
  .form-checkbox {
    font-size: 14px;
    display: flex;
    align-items: center;
    margin: 24px 0;

    svg {
      width: 24px;
      height: 24px;
      fill: ${({ theme: { preset } }) => preset['100']};
    }

    input[type='checkbox'] {
      display: none;
      ~ svg:first-of-type {
        opacity: 1;
        > path {
          fill: ${({ theme: { common } }) => common.gray['200']};
        }
      }
      ~ svg:last-of-type {
        opacity: 0;
        margin-left: -24px;
      }

      &:checked {
        ~ svg:first-of-type {
          opacity: 0;
        }
        ~ svg:last-of-type {
          opacity: 1;
        }
      }
    }

    label {
      margin-left: 5px;
    }
  }
  .form-redirect {
    font-size: 14px;
    margin-top: 24px;
    text-align: center;
    a {
      margin-left: 5px;
    }
  }
`;
