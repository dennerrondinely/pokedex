import { createGlobalStyle } from 'styled-components';
import media from 'styled-media-query';

export default createGlobalStyle`
html, body, #root {
  height: 100%;
}
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

    &[data-type='grass'],
    &[data-type='bug'] {
      background-color: var(--green);
    }
    &[data-type='poison'],
    &[data-type='ghost'] {
      background-color: var(--purple);
    }
    &[data-type='fire'],
    &[data-type='dragon'] {
      background-color: var(--red);
    }
    &[data-type='water'],
    &[data-type='ice'] {
      background-color: var(--blue);
    }
    &[data-type='electric'] {
      background-color: var(--yellow);
    }
    &[data-type='psychic'],
    &[data-type='fairy'] {
      background-color: var(--pink);
    }
    &[data-type='normal'] {
      background-color: var(--grey-5);
    }
    &[data-type='fighting'] {
      background-color: var(--grey-4);
    }
    &[data-type='ground'],
    &[data-type='rock'] {
      background-color: var(--brown);
    }
  }
  body {
    -webkit-font-smoothing: antialiased;
    --primary: #6D7BE3;
    --grey: #B8B9CF;
    --grey-1: #212121;
    --grey-2: #585858;
    --grey-3: #939393;
    --grey-4: #BCBCBC;
    --grey-5: #E0E0E0;
    --grey-6: #F5F5F5;
    --white: #FFFFFF;
    --black: #1F1F1F;
    --blue: #4EC6FD;
    --brown: #705849;
    --green: #62D5AE;
    --pink: #F7A2DF;
    --purple: #9F449F;
    --red: #F16F65;
    --yellow: #FFCE4B;
  }
  body, input, button {
    font: 14px Roboto, sans-serif;
  }

  h1 {
    color: var(--grey-1);
    font-size: 1.5rem;
    font-weight: bold;
    ${media.greaterThan('medium')`
      & {
        font-size: 4rem;
      }
    `}
    }

  h2 {
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 0.3rem;
    color: var(--white);
  }

  button {
    cursor: pointer;
  }
`;
