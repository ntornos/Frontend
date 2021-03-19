import React from 'react';

import { FormInputContainer, FormInputLabel, Group } from './FormInput.styles';

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <Group>
      <FormInputLabel>{label}</FormInputLabel>
      <FormInputContainer onChange={handleChange} {...otherProps} />
    </Group>
  );
};

export default FormInput;
