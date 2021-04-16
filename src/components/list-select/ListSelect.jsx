import React from 'react';
import { Container, Text } from '../UtilityComponents';
import { StyledSelect } from './ListSelect.styles';

const ListSelect = ({ label, options, handleChange, handleBlur }) => {
  // const [] = useState('');
  return (
    <Container width='40%'>
      <Text>{label}</Text>
      <StyledSelect options={options} onBlur={handleBlur} onChange={handleChange} />
    </Container>
  );
};

export default ListSelect;
