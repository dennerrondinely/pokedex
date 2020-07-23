import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  header {
    color: var(--white);
    > div {
      height: 17rem;
      position: relative;
      padding: 1.87rem 1rem 0;
      display: flex;
      align-items: flex-start;
      max-width: 57.5rem;
      width: 100%;
      margin: 0 auto;

      > div:last-child {
        background-color: var(--white);
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
        position: absolute;
        left: 0;
        top: calc(100% - 2rem);
        height: 2rem;
        width: 100%;
        z-index: 0;
      }
    }
  }

  ${media.greaterThan('medium')`
    header {
      > div {
        height: 21rem;
        padding-top: 5rem;
        h1 {
          small {
            font-size: 1.5rem;
          }
        }

        > div:last-child {
          height: 3rem;
          top: calc(100% - 3rem);
          border-top-right-radius: 30px;
          border-top-left-radius: 30px;
        }
      }
    }
  `}
`;

export const HeaderFirst = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  position: relative;
  a {
    color: var(--white);
  }

  h1 {
    position: relative;
    color: var(--white);
    margin-top: 1.5rem;
  }

  ${media.greaterThan('medium')`
    &{
      padding-left: 6rem;
      justify-content: flex-start;
      align-items: center;
      a {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate(-1rem, -50%)
      }
      h1 {
        margin-top: 0rem;
      }
    }
  `}
`;
export const HeaderLast = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  svg {
    cursor: pointer;
  }

  small {
    margin-top: 2rem;
    font-size: 0.875rem;
    font-weight: bold;
  }

  ${media.greaterThan('medium')`
    & {
      padding-right: 6rem;

      small {
        margin-top: 2.5rem;
        font-size: 1.5rem;
      }
    }
  `}
`;

export const TypesContainer = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  span {
    margin: 0.3rem 0.3rem 0 0;
    width: auto;
    max-width: 3rem;
    border-radius: 30px;
    background-color: rgba(255, 255, 255, 0.2);
    color: var(--white);
    font-size: 0.688rem;
    font-weight: 500;
    padding: 0.37rem 0.5rem;
    text-align: center;
  }

  ${media.greaterThan('medium')`
    span {
      width: auto;
      max-width: none;
      font-size: 1.25rem;
      padding: 0.37rem 1rem;
    }
  `}
`;

export const ContainerImage = styled.div`
  display: flex;
  width: 10.25rem;
  height: 10.25rem;
  position: absolute;
  transform: translate(-50%, -80%);
  left: 50%;
  top: 100%;
  z-index: 2;
  img {
    z-index: 1;
    height: 100%;
  }
  div {
    border-radius: 50%;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: var(--white);
    z-index: 0;
    opacity: 0.15;
  }
  ${media.greaterThan('medium')`
    &{
      width: 18.063rem;
      height: 18.063rem;
      transform: translate(-50%,-75%);
    }
  `}
`;

export const ContainerDetails = styled.div`
  max-width: 57.5rem;
  width: 100%;
  margin: 0 auto;
  flex: 1;
  background-color: var(--white);
  padding: 1rem 1.25rem 0;

  ${media.greaterThan('medium')`
    &{
      padding: 3rem 6rem 0;
    }
  `}
`;
