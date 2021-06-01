import React from 'react';

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
