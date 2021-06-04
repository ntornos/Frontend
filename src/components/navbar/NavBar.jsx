import { useState } from 'react';

import { Header, Option, LogoContainer, OptionsContainer } from './NavBar.styles';
import { MdBrightness4 as Dark, MdBrightness7 as Light } from 'react-icons/md';
import Dropdown from '../dropdown-menu/Dropdown';
import GuestMenu from '../guest-menu/GuestMenu';
import CustomerMenu from '../customer-menu/CustomerMenu';
import AdminMenu from '../admin-menu/AdminMenu';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/user.slice';

const NavBar = ({ themeToggler, theme, className }) => {
  const currUser = useSelector(selectCurrentUser);
  const [showMenu, setShowMenu] = useState(true);

  const dropDownShow = () => !showMenu && setShowMenu(true);
  const dropDownHide = () => setShowMenu(false);

  const hideDD = showMenu ? dropDownHide : null;

  let Menu = <GuestMenu />;

  if (currUser && currUser.role === 'ADMIN') Menu = <AdminMenu dropDownShow={dropDownShow} />;
  if (currUser && currUser.role === 'CUSTOMER') Menu = <CustomerMenu dropDownShow={dropDownShow} />;

  return (
    <Header className={className} onMouseLeave={hideDD}>
      <LogoContainer to='/' onClick={hideDD}>
        <h2>Ntornos</h2>
      </LogoContainer>
      <OptionsContainer>
        <Option to='/' onClick={hideDD}>
          Home
        </Option>

        {Menu}
        {showMenu && <Dropdown toggleDropdown={hideDD} />}

        <Option as='div' onClick={() => themeToggler()}>
          {theme === 'light' ? <Light size={22} /> : <Dark size={22} />}
        </Option>
      </OptionsContainer>
    </Header>
  );
};

export default NavBar;
