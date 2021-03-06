import { StyledSelect, StyledLabel, StyledErrorMessage } from './SelectOption.styles';
import { useField } from 'formik';
import { Container } from '../UtilityComponents';

const SelectOption = ({ label, width, padding, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and also replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <Container padding={padding} display='flex' direction='column' width={width}>
      <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
      <StyledSelect {...field} {...props} />
      {meta.touched && meta.error ? <StyledErrorMessage>{meta.error}</StyledErrorMessage> : null}
    </Container>
  );
};

export default SelectOption;
