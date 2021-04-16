import styled from 'styled-components';

export const StyledSelect = styled.select`
  background-color: hsl(0, 0%, 100%);
  border-color: hsl(0, 0%, 80%);
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  cursor: pointer;
  /* align-items: center; */
  /* display: flex; */
  /* flex-wrap: wrap; */
  /* justify-content: space-between; */
  min-height: 38px;
  outline: 0 !important;
  position: relative;
  -webkit-transition: all 100ms;
  transition: all 100ms;
  box-sizing: border-box;
  color: #808080;
  font-size: 16px;
`;

export const StyledErrorMessage = styled.div`
  font-size: 12px;
  color: #c53030;
  margin-top: 0.25rem;
`;

export const StyledLabel = styled.label`
  margin-bottom: 0.3rem;
`;
