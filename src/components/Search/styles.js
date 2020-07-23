import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  position: relative;
  margin-top: 0.9rem;
  max-width: 21.875rem;
  height: 2.188rem;
  input {
    border: none;
    width: 100%;
    height: 100%;
    border-radius: 40px;
    background-color: var(--grey-6);
    padding: 0 2.43rem;

    &::placeholder {
      font-size: 0.875rem;
      color: var(--grey-4);
      font-weight: 500;
    }
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: var(--primary);
    position: absolute;
    &:first-child {
      top: 50%;
      left: 0.6rem;
      transform: translate(0px, -50%);
    }
    &:last-child {
      top: 50%;
      right: 0.6rem;
      transform: translate(0px, -50%);
    }
  }

  ${media.greaterThan('medium')`
    width: 21.875rem;
    height: 3.125rem;
  `}
`;
