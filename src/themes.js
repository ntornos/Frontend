import { createGlobalStyle } from 'styled-components';

export const darkTheme = {
  body: '#111',
  fontColor: '#fff',
};

export const lightTheme = {
  body: '#fff',
  fontColor: '#111',
};

export const GlobalStyles = createGlobalStyle`
  * {
    /* background-color: ${props => props.theme.body}; */
    /* color: ${props => props.theme.fontColor}; */
    font-family: 'Open Sans', sans-serif
  }


  body {
    height: 100vh;
    margin: 0;
    box-sizing: border-box;
  }

  #root {
    color: ${props => props.theme.fontColor};
    height: 100%
  }
`;
