import React from 'react';

import { useField } from 'formik';
import { StyledErrorMessage } from '../select-formik/SelectOption.styles';

const FormInputText = ({ label, width, handleChange, handleOnInput, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        type='number'
        {...field}
        // onInput={handleOnInput}
        onChange={handleChange}
        placeholder='SF'
        {...props}
      />
      {meta.touched && meta.error ? <StyledErrorMessage>{meta.error}</StyledErrorMessage> : null}
    </div>
  );
};

export default FormInputText;
