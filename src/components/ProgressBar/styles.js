import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: 0.875rem;
  }

  ${media.greaterThan('medium')`
    & {
      width: 100%;
      span {
        width: 4rem;
        font-size: 1.125rem;
      }
    }
  `}
`;
export const Bar = styled.div`
  width: 100%;
  min-width: 10rem;
  height: 0.313rem;
  background-color: var(--grey-6);
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  margin-left: 10px;

  div {
    border-radius: 1rem;
    background-color: var(--primary);
    height: 100%;
    width: ${(props) => `${props.progress}%`};
    position: absolute;
    left: 0;
  }

  ${media.greaterThan('medium')`
    & {
      min-width: none;
    }
  `}
`;
