import styled from 'styled-components';
import Select from 'react-select';

export const StyledSelect = styled(Select)`
  /* border-radius: 2em; */
  /* background-color: #ebecf0; */
  /*
  color: '#172B4D';
  display: 'inline-block';
  font-size: 12;
  font-weight: 'normal';
  line-height: '1';
  min-width: 1;
  padding: '0.16666666666667em 0.5em';
  text-align: 'center'; */

  &.noInput {
    background: red;
  }
`;
