import React, { useRef } from 'react';
import Card from '../card/Card';

import { DropdownContainer, MenuItem, DropdownDivider } from './Dropdown.styles';
import useResize from '../../hooks/dimensions.hook';

const Dropdown = () => {
  // const componentRef = useRef(null);
  // const { width, height } = useResize();

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
