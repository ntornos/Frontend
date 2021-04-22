import React, { useContext, useState } from 'react';

import { myContext } from '../Context';
import { Header, Option, LogoContainer, OptionsContainer } from './NavBar.styles';
import { MdBrightness4 as Dark, MdBrightness7 as Light } from 'react-icons/md';
import Dropdown from '../dropdown-menu/Dropdown';
import GuestMenu from '../guest-menu/GuestMenu';
import CustomerMenu from '../customer-menu/CustomerMenu';
import AdminMenu from '../admin-menu/AdminMenu';

const NavBar = ({ themeToggler, theme }) => {
  const currUser = useContext(myContext);

  const [showMenu, setShowMenu] = useState(false);

  let Menu = <GuestMenu />;

  if (currUser && currUser.role === 'ADMIN') Menu = <AdminMenu toggleDropdown={setShowMenu} />;
  if (currUser && currUser.role === 'CUSTOMER')
    Menu = <CustomerMenu toggleDropdown={setShowMenu} />;

  return (
    <Header direction='row' height='70px' width='100vw' display='flex' justify='space-between'>
      <LogoContainer to='/'>
        <h2>Ntornos</h2>
      </LogoContainer>
      <OptionsContainer>
        <Option to='/'>Home</Option>

        {Menu}
        {showMenu && <Dropdown toggleDropdown={setShowMenu} />}

        <Option as='div' onClick={() => themeToggler()}>
          {theme === 'light' ? <Light size={22} /> : <Dark size={22} />}
        </Option>
      </OptionsContainer>
    </Header>
  );
};

export default NavBar;
