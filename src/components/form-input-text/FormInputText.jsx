import React, { useState } from 'react';

import { useField } from 'formik';
import { StyledErrorMessage } from '../select-formik/SelectOption.styles';
import { Input, Label } from '../listing-edit-forms/ListingEditForm.styles';
import { Container } from '../UtilityComponents';

import NumberFormat from 'react-number-format';

const FormInputText = ({
  label,
  placeholder,
  name,
  padding,
  suffix,
  capNumber,
  onValueChange,
  setFieldValue,
  prefix,
  thousandSeparator,
}) => {
  const [field, meta] = useField(name);
  const MAX_VAL = capNumber;

  const handleValueCap = inputObj => {
    const { value } = inputObj;
    if (value <= MAX_VAL) return inputObj;
  };

  return (
    <Container width='16%' padding={padding}>
      <Label htmlFor={name}>{label}</Label>

      <NumberFormat
        name={name}
        placeholder={placeholder}
        thousandSeparator={thousandSeparator}
        isAllowed={handleValueCap}
        suffix={suffix}
        prefix={prefix}
        {...field}
        customInput={Input}
        isNumericString={true}
        onValueChange={values => {
          onValueChange(values, name, setFieldValue);
        }}
      />

      {meta.touched && meta.error ? <StyledErrorMessage>{meta.error}</StyledErrorMessage> : null}
    </Container>
  );
};

export default FormInputText;

// const createRegexFormatter = (regex, defaultValue) => {
//   // take in the regex and default value SF in this case.
//   return (newValue, oldValue) => {
//     return regex.test(newValue) ? newValue : newValue ? oldValue : defaultValue;
//   };
// };

// const handleKeyDown = (input, formatFn, callback) => {
//   // input old value.
//   let oldValue = input.value;

//   const result = formatFn(input.value, oldValue);

//   if (typeof result === 'string') {
//     input.value = result;
//   }

//   oldValue = input.value;

//   if (callback !== undefined) {
//     callback(input, result);
//   }
// };

// const executeKeyDown = e => {
//   handleKeyDown(e.target, createRegexFormatter(/\SF$/, ' SF'), input => {
//     const pos = Math.max(0, input.value.length - 3);
//     input.setSelectionRange(pos, pos);
//   });
// };
