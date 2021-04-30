import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import NavBar from './components/navbar/NavBar';
import Routes from './routes';
import { lightTheme, darkTheme, GlobalStyles } from './themes';

import { fetchUser, selectUserStatus, clearState, selectUser } from './redux/user/user.slice';

function App() {
  const [theme, setTheme] = useState('light');
  const { status, operation } = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'success' && operation === 'signin') {
      dispatch(fetchUser());
    }
    if (operation === 'fetchuser' && status === 'success') dispatch(clearState());
  }, [dispatch, status, operation]);

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
