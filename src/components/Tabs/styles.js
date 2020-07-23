import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  z-index: 100;
  nav {
    border-bottom: 1px solid var(--grey-5);
    display: flex;
    justify-content: space-between;
  }

  ${media.greaterThan('medium')`
    nav {
      justify-content: flex-start;
    }
  `}
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  padding: ${(props) => (props.select ? '1rem 0 calc(1rem - 2px)' : '1rem 0')};
  color: ${(props) => (props.select ? ' var(--gray-1)' : 'var(--grey-4)')};
  border-bottom: ${(props) => props.select && '2px solid var(--primary)'};

  ${media.greaterThan('medium')`
    &{
      font-size: 1.125rem;
      margin-right: 3rem;
    }
  `}
`;
export const Content = styled.section`
  margin: 2rem 0;
`;

export const Stats = styled.ul`
  list-style: none;
  color: var(--grey-3);

  li {
    height: 1rem;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    > span {
      font-size: 0.875rem;
      min-width: 8rem;
    }
  }

  ${media.greaterThan('medium')`
    li {
      justify-content: flex-start;

      > span {
        min-width: 12rem;
        font-size: 1.125rem;
      }
    }
  `}
`;

export const About = styled.ul`
  list-style: none;
  li {
    display: flex;
    min-height: 1rem;
    margin-bottom: 1rem;
    > span {
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--grey-3);
      display: inline-block;
      word-break: break-all;
      min-width: 100px;
      margin-right: 5px;
    }

    small {
      display: flex;
      align-items: center;
      font-size: 0.875rem;
      color: var(--gray-2);
    }
  }

  ${media.greaterThan('medium')`
    & {
      li {
        h3 {
          font-size: 1.5rem;
        }
        span {
          min-width: 12rem;;
        }
        span, small {
          font-size: 1.125rem;
        }
      }
    }
  `}
`;

export const Evolution = styled.ul`
  list-style: none;
  li {
    margin-bottom: 1.8rem;
    > div {
      display: flex;

      > div:first-child {
        border-radius: 10px;
        border: solid 1px var(--grey-5);
        margin-right: 1.25rem;
      }
    }

    h2 {
      color: var(--grey-1);
      margin-bottom: 1.8rem;
    }
    h3 {
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--grey-3);
      margin-bottom: 0.3rem;
    }

    p {
      font-size: 0.875rem;
      color: var(--grey-2);
    }
  }

  ${media.greaterThan('medium')`
    & {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
     li {
      h2 {
        font-size: 1.5rem;
      }

      h3, p {
        font-size: 1.125rem;
      }

      > div {
        >div:first-child {
          width: 10rem;
          height: 10rem;
          margin-right: 1.875rem;

          img {
            height: 100%;
          }
        }
        >div:last-child {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      }
     }
    }
  `}
`;

export const Male = styled.div`
  background: #50a2d4;
  display: inline-block;
  border-radius: 50%;
  width: 0.5rem;
  height: 0.5rem;
  margin-right: 0.3rem;
`;
export const Female = styled.div`
  background: #d451b0;
  display: inline-block;
  border-radius: 50%;
  width: 0.5rem;
  height: 0.5rem;
  margin-right: 0.3rem;
  margin-left: 1.875rem;
`;
