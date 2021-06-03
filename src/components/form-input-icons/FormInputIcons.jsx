import React from 'react';
import Icon from '../icon/Icon';

import { FormInputIconsRadio, FormInputIconLabel, FormInputGroup } from './FormInputIcons.styles';

const FormInputIcons = ({ iconName, label, ...otherProps }) => {
  return (
    // create a form input component that's for icon selection.
    // <FormInputGroup>
    <FormInputIconLabel className={otherProps.checked && 'checked'} {...otherProps}>
      {/* <FormInputIconsRadio {...otherProps} /> */}
      <Icon iconName={iconName} />
      {label}
    </FormInputIconLabel>
    // </FormInputGroup>
  );
};

export default FormInputIcons;

// having a simple form that only has one state, listing status. if that changes we render the correct form. The data will be complicated because are we going to dispatch an action and change listingInProcess or keep it on local state, after it changes a re-render will occur maybe the status is passed down correctly.

// try redoing formInputIcons with a <Icon />, a div and maybe a button, if it works well then just switch that on and off render the appropiate form depending on that.
