import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import NavBar from './components/navbar/NavBar';
import Routes from './routes';
import { lightTheme, darkTheme, GlobalStyles } from './themes';

import { fetchUser } from './redux/user/user.slice';

function App() {
  const [theme, setTheme] = useState('light');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

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
