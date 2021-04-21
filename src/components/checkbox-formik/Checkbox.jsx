import { useField } from 'formik';
import { StyledErrorMessage } from '../select-formik/SelectOption.styles';
import { Container } from '../UtilityComponents';

const Checkbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <Container margin='20px 0px' display='flex' justify='center' direction='column'>
      <label className='checkbox'>
        <input {...field} {...props} type='checkbox' />
        {children}
      </label>
      {/* {meta.touched && meta.error ? <div className='error'>{meta.error}</div> : null} */}
      {meta.touched && meta.error ? <StyledErrorMessage>{meta.error}</StyledErrorMessage> : null}
    </Container>
  );
};

export default Checkbox;
