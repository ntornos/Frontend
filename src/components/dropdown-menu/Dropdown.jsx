import React, { useContext } from 'react';
import Card from '../card/Card';
import axios from 'axios';

import { myContext } from '../Context';
import {
  DropdownContainer,
  MenuItem,
  DropdownDivider,
  DropdownUserIconContainer,
} from './Dropdown.styles';
import UserIcon from '../user-icon/UserIcon';
import { Text } from '../UtilityComponents';

const Dropdown = ({ closeDropdown }) => {
  const currUser = useContext(myContext);

  const logout = () => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/account/logout`, {
      withCredentials: true,
    });
    window.location.href = '/';
  };

  return (
    <Card>
      <DropdownContainer onMouseLeave={() => closeDropdown(false)}>
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
        <MenuItem onClick={() => closeDropdown(false)} to='/myntornos/create-listing'>
          Upload
        </MenuItem>
        {/* to be added later: */}
        {/* <MenuItem>Saved Homes</MenuItem> */}
        <MenuItem onClick={() => closeDropdown(false)} to='/myntornos/account'>
          Account Settings
        </MenuItem>
        <DropdownDivider />
        <MenuItem to='/' onClick={logout}>
          Sign out
        </MenuItem>
      </DropdownContainer>
    </Card>
  );
};

export default Dropdown;
