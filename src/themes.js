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
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.fontColor};
    font-family: 'Open Sans', sans-serif
  }
`;
