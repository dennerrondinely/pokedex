import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    max-width: 13rem;
    display: flex;
    justify-content: center;
    > span {
      align-self: center;
    }
  }

  ${media.greaterThan('medium')`
    & {
      max-width: 300px;
    }
  `}
`;

export const Button = styled.button`
  width: ${(props) => (props.select ? '1.875rem' : '1.5rem')};
  height: 1.875rem;
  border: none;
  border-radius: 50%;
  color: ${(props) => (props.select ? 'var(--white)' : 'var(--grey-3)')};
  background-color: ${(props) =>
    props.select ? 'var(--primary)' : 'var(--white)'};
`;

export const Previous = styled.button`
  border: none;
  background-color: transparent;
  color: ${(props) => (props.active ? 'var(--primary)' : 'var(--grey-5)')};
`;

export const Next = styled.button`
  border: none;
  background-color: transparent;
  color: ${(props) => (props.active ? 'var(--primary)' : 'var(--grey-5)')};
`;
