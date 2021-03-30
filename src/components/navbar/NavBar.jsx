import React, { useContext } from 'react';
import { useSelector } from 'react-redux';

import { myContext } from '../Context';
import { Header, Option, LogoContainer, OptionsContainer } from './NavBar.styles';
import { MdBrightness4 as Dark, MdBrightness7 as Light } from 'react-icons/md';
import UserIcon from '../user-icon/UserIcon';
import Dropdown from '../dropdown-menu/Dropdown';

const NavBar = ({ themeToggler, theme }) => {
  const currUser = useContext(myContext);
  const dropdownHidden = useSelector(state => state.userInterface.dropdownHidden);

  return (
    <Header justify='space-between'>
      <LogoContainer to='/'>
        <h2>Ntornos</h2>
      </LogoContainer>
      <OptionsContainer>
        <Option to='/'>Home</Option>

        {/* logged in routes */}
        {currUser ? (
          <>
            {/* admin routes */}
            {currUser.role === 'ADMIN' && (
              <>
                <Option to='/dashboard'>Dashboard</Option>
              </>
            )}
            {/* user routes */}
            <UserIcon hasEvent={true} dropdownHidden={dropdownHidden} />

            {!dropdownHidden && <Dropdown />}
          </>
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
