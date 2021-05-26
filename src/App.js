import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Routes from './routes/routes';
import { lightTheme, darkTheme, GlobalStyles } from './themes';

import { fetchUser, clearState, selectCurrentUser } from './redux/user/user.slice';

function App() {
  const [theme, setTheme] = useState('light');

  const currUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const memoizedFetchUser = useCallback(async () => {
    await dispatch(fetchUser());
    dispatch(clearState());
  }, [dispatch]);

  // fettch user listings here, maybe?

  useEffect(() => {
    if (!currUser) {
      memoizedFetchUser();
    }
  }, [memoizedFetchUser, currUser]);

  // const themeToggler = () => {
  //   theme === 'light' ? setTheme('dark') : setTheme('light');
  // };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Router>
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
