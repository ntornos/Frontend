import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import NavBar from './components/navbar/NavBar';
import Routes from './routes';
import { lightTheme, darkTheme, GlobalStyles } from './themes';

function App() {
  const [theme, setTheme] = useState('light');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Router>
        <NavBar themeToggler={themeToggler} theme={theme} />
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
