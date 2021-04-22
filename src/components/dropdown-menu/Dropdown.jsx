import React, { useContext } from 'react';

import { myContext } from '../Context';
import {
  DropdownContainer,
  MenuItem,
  DropdownDivider,
  DropdownUserIconContainer,
} from './Dropdown.styles';
import UserIcon from '../user-icon/UserIcon';
import { Text } from '../UtilityComponents';
import { UserIconArrow, DropdownCard } from './Dropdown.styles';
import { logout } from '../../authFuncs';
import useResize from '../../hooks/dimensions.hook';

const Dropdown = ({ toggleDropdown }) => {
  const currUser = useContext(myContext);

  const toggleMenuHandler = () => toggleDropdown();
  const { width } = useResize();

  return (
    <DropdownCard width={width}>
      <DropdownContainer onMouseLeave={toggleMenuHandler}>
        <UserIconArrow />
        <DropdownUserIconContainer>
          <UserIcon />
          <DropdownContainer>
            <Text fontColor='#292929'>{currUser.username}</Text>
            <Text fontSize='14px' fontColor='#757575'>
              @{currUser.email.split('@')[0]}
            </Text>
          </DropdownContainer>
        </DropdownUserIconContainer>
        <DropdownDivider />
        <MenuItem to='/myntornos/create-listing' onClick={toggleMenuHandler}>
          Upload
        </MenuItem>
        {/* to be added later: */}
        <MenuItem to='/myntornos/saved-homes' onClick={toggleMenuHandler}>
          Saved Homes
        </MenuItem>
        <MenuItem to='/myntornos/listings-manager' onClick={toggleMenuHandler}>
          Listings Manager
        </MenuItem>
        <MenuItem to='/myntornos/account' onClick={toggleMenuHandler}>
          Account Settings
        </MenuItem>
        <DropdownDivider />
        <MenuItem to='/' onClick={logout}>
          Sign out
        </MenuItem>
      </DropdownContainer>
    </DropdownCard>
  );
};

export default Dropdown;
