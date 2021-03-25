import React from 'react';
import Card from '../card/Card';

import { DropdownContainer, MenuItem, DropdownDivider } from './Dropdown.styles';

const Dropdown = () => {
  return (
    <Card>
      <DropdownContainer>
        <MenuItem>Upload</MenuItem>
        <MenuItem>Saved Homes</MenuItem>
        <MenuItem>Account Settings</MenuItem>
        <DropdownDivider />
        <MenuItem>Sign out</MenuItem>
      </DropdownContainer>
    </Card>
  );
};

export default Dropdown;
