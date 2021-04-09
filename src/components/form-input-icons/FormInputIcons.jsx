import React from 'react';
import Icon from '../icon/Icon';

import { FormInputIconsRadio, FormInputIconLabel, FormInputGroup } from './FormInputIcons.styles';

const FormInputIcons = ({ handleChange, iconName, ...otherProps }) => {
  return (
    // create a form input component that's for icon selection.
    // maybe defaulting it to radio.
    <FormInputGroup>
      <FormInputIconLabel className={otherProps.checked && 'checked'}>
        <FormInputIconsRadio type='radio' onChange={handleChange} {...otherProps} />
        <Icon iconName={iconName} />
        {otherProps.value === 'RENT' ? 'Rent' : 'Sale'}
      </FormInputIconLabel>
    </FormInputGroup>
  );
};

export default FormInputIcons;
