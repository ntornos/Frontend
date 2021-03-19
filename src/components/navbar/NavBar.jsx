import axios from 'axios';
import React, { useContext } from 'react';
import { myContext } from '../Context';
import { Header, Option, LogoContainer, OptionsContainer } from './NavBar.styles';
import { MdBrightness4 as Dark, MdBrightness7 as Light } from 'react-icons/md';

const NavBar = ({ themeToggler, theme }) => {
  const currUser = useContext(myContext);

  const logout = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_SERVER_URL}/account/logout`, {
      withCredentials: true,
    });
    console.log(`data`, data);
    if (data.status) window.location.href = '/';
  };

  return (
    <Header justify='space-between'>
      <LogoContainer to='/'>
        <h2>Ntornos</h2>
      </LogoContainer>
      <OptionsContainer>
        <Option to='/'>Home</Option>

        {currUser ? (
          // logged in routes
          <Option as='div' onClick={logout}>
            Log out
          </Option>
        ) : (
          <>
            <Option to='/login'>Sign in</Option>
            <Option to='/register'>Sign up</Option>
          </>
        )}
        <Option as='div' onClick={() => themeToggler()}>
          {theme === 'light' ? <Light size={22} /> : <Dark size={22} />}
        </Option>
      </OptionsContainer>
    </Header>
  );
};

export default NavBar;
