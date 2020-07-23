import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 3.75rem;
  > h1 {
    font-size: 1.125rem;
    font-weight: 500;
    color: var(--primary);
  }
  div {
    > p {
      font-size: 0.875rem;
      font-weight: normal;
      color: var(--grey-3);
      margin: 0.5rem 0 0rem;
    }
    > p:last-child {
      margin: 0.5rem 0 2rem;
    }
  }

  > button {
    display: flex;
    align-items: center;
    background-color: transparent;
    border: none;
    color: var(--primary);
    > span {
      text-decoration: underline;
      font-size: 0.875rem;
    }
  }

  ${media.greaterThan('medium')`
    & {
      h1 {
        font-size: 2.25rem;
      }

      div {
        >p {
          margin: 1.25rem 0 0rem;
          font-size: 1.125rem;
        }

        > p:last-child {
          margin: 0.5rem 0 2.6rem;
        }
      }

      > button {
        span {
          font-size: 1.125rem;
        }
      }
    }
  `}
`;
