import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  padding: 2.5rem 1.25rem;
  max-width: 1200px;
  margin: 0 auto;
  ul {
    list-style: none;
    grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));
    grid-gap: 1.25rem;
    display: grid;
    padding: 1rem 0;
    margin: 1rem 0;
  }
  ${media.greaterThan('medium')`
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    ul {
      grid-template-columns: repeat(auto-fill, minmax(21rem, 1fr));
    }
  `}
`;
