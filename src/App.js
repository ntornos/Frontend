import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import NavBar from './components/navbar/NavBar';
import Routes from './routes';
import { lightTheme, darkTheme, GlobalStyles } from './themes';

import { fetchUser, clearState, selectUser, operations } from './redux/user/user.slice';

function App() {
  const [theme, setTheme] = useState('light');
  const { status, operation } = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  useEffect(() => {
    if (operation === operations.SIGN_IN && status === 'success') dispatch(fetchUser());
  }, [status, operation, dispatch]);

  // local Auth working, but google OAuth not working due to a missing refetch from the useEffect below.
  useEffect(() => {
    if (status === 'success' && operation) dispatch(clearState());
  }, [status, dispatch, operation]);

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
