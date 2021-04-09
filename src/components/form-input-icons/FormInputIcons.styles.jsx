import styled from 'styled-components';

const subColor = 'grey';

export const FormInputGroup = styled.fieldset`
  padding: 0;
  border: none;
`;

export const FormInputIconsRadio = styled.input`
  position: absolute;
  clip: rect(0, 0, 0, 0);
  pointer-events: none;
  overflow: visible;

  &:checked ~ label {
    background: red;
  }
`;

export const FormInputIconLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* color: ${props => props.theme.fontColor}; */
  width: 180px;
  height: 100px;
  padding: 15px;
  text-decoration: none;
  box-sizing: border-box;
  cursor: pointer;
  border: 0.0625rem solid #bfbfbf;
  user-select: none;

  &.checked {
    color: #427b01;
    border-color: #74b71b;
    background-color: #f2f9e9;
  }
`;
