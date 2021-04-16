import React from 'react';
import Icon from '../icon/Icon';

import { FormInputIconsRadio, FormInputIconLabel, FormInputGroup } from './FormInputIcons.styles';

const FormInputIcons = ({ iconName, label, ...otherProps }) => {
  return (
    // create a form input component that's for icon selection.
    // maybe defaulting it to radio.
    <FormInputGroup>
      <FormInputIconLabel className={otherProps.checked && 'checked'}>
        <FormInputIconsRadio type='radio' {...otherProps} />
        <Icon iconName={iconName} />
        {label}
      </FormInputIconLabel>
    </FormInputGroup>
  );
};

export default FormInputIcons;
