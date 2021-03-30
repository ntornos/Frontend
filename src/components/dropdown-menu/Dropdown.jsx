import React, { useContext } from 'react';
import Card from '../card/Card';
import { useDispatch } from 'react-redux';

import { myContext } from '../Context';
import {
  DropdownContainer,
  MenuItem,
  DropdownDivider,
  DropdownUserIconContainer,
} from './Dropdown.styles';
import UserIcon from '../user-icon/UserIcon';
import { Text } from '../UtilityComponents';
import { toggleMenu } from '../../redux/user-interface/userInterface.actions';
import { UserIconArrow } from './Dropdown.styles';
import { logout } from '../../authFuncs';

const Dropdown = () => {
  const currUser = useContext(myContext);
  const dispatch = useDispatch();

  const toggleMenuHandler = () => dispatch(toggleMenu());

  return (
    <Card>
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
        <MenuItem to='/myntornos/create-listing'>Upload</MenuItem>
        {/* to be added later: */}
        {/* <MenuItem>Saved Homes</MenuItem> */}
        <MenuItem to='/myntornos/account'>Account Settings</MenuItem>
        <DropdownDivider />
        <MenuItem to='/' onClick={logout}>
          Sign out
        </MenuItem>
      </DropdownContainer>
    </Card>
  );
};

export default Dropdown;
