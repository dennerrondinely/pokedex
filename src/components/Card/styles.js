import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.li`
  border-radius: 10px;
  padding: 0.93rem;
  position: relative;
  height: 8.125rem;
  overflow: hidden;
  a {
    text-decoration: none;
    > div:first-child {
      display: flex;
      flex-direction: column;
      height: 5rem;
    }
  }
  span {
    width: auto;
    border-radius: 30px;
    background-color: rgba(255, 255, 255, 0.2);
    color: var(--white);
    font-size: 0.688rem;
    font-weight: 500;
    padding: 0.37rem;
    margin: 0 auto 0.3rem 0;
    text-align: center;
  }

  h3 {
    color: var(--white);
  }

  strong {
    font-size: 0.875rem;
    font-weight: bold;
    color: var(--white);
  }

  ${media.greaterThan('medium')`
    & {
      height: 10rem;
    }

    a {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      > div {
        width: 50%;
      }

      > div:first-child {
        flex-direction: row;
        flex-wrap: wrap;
      }

      h2 {
        width: 100%;
        font-size: 1.5rem;
      }

      h3 {
        width: 100%;
        font-size: 0.875rem;
      }

      span {
        margin: 0 0.3rem 1rem 0;
        padding: 0.37rem 0.5rem;
      }
    }
  `}
`;

export const ImageContainer = styled.div`
  width: 4.313rem;
  height: 4.313rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 100%;
  top: 100%;
  transform: translate(-90%, -90%);
  padding: 0.25rem;
  box-sizing: unset;
  div {
    border-radius: 50%;
    position: absolute;
    height: 100%;
    width: 100%;
    opacity: 0.15;
    background-color: var(--white);
  }
  img {
    height: 100%;
  }

  ${media.greaterThan('medium')`
    & {
      width: 10rem;
      height: 8.813rem;
      transform: translate(-20%, 10%);
      position: relative;
      left: 0;
    }

    img {
      position: relative;
      transform: translate(2%, -15%);
    }
  `}
`;
