import React, { useContext } from 'react';
import { useSelector } from 'react-redux';

import { myContext } from '../Context';
import { Header, Option, LogoContainer, OptionsContainer } from './NavBar.styles';
import { MdBrightness4 as Dark, MdBrightness7 as Light } from 'react-icons/md';
import UserIcon from '../user-icon/UserIcon';
import Dropdown from '../dropdown-menu/Dropdown';
import GuestMenu from '../guest-menu/GuestMenu';
import CustomerMenu from '../customer-menu/CustomerMenu';
import AdminMenu from '../admin-menu/AdminMenu';

const NavBar = ({ themeToggler, theme }) => {
  const currUser = useContext(myContext);
  const dropdownHidden = useSelector(state => state.userInterface.dropdownHidden);

  let Menu = <GuestMenu />;

  if (currUser) {
    if (currUser.role === 'ADMIN') Menu = <AdminMenu />;
    if (currUser.role === 'CUSTOMER') Menu = <CustomerMenu />;
  }

  return (
    <Header justify='space-between'>
      <LogoContainer to='/'>
        <h2>Ntornos</h2>
      </LogoContainer>
      <OptionsContainer>
        <Option to='/'>Home</Option>

        {Menu}
        {!dropdownHidden && <Dropdown />}

        <Option as='div' onClick={() => themeToggler()}>
          {theme === 'light' ? <Light size={22} /> : <Dark size={22} />}
        </Option>
      </OptionsContainer>
    </Header>
  );
};

export default NavBar;
