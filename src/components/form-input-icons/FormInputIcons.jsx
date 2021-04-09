import React from 'react';
import Icon from '../icon/Icon';

import {
  FormInputIconContainer,
  FormInputIconLabel,
  FormInputGroup,
} from './FormInputIcons.styles';

const FormInputIcons = ({ handleChange, iconName, ...otherProps }) => {
  return (
    // create a form input component that's for icon selection.
    // maybe defaulting it to radio.
    <FormInputGroup>
      <FormInputIconLabel>
        <FormInputIconContainer type='radio' onChange={handleChange} {...otherProps} />
        <Icon iconName={iconName} />
      </FormInputIconLabel>
    </FormInputGroup>
  );
};

export default FormInputIcons;
