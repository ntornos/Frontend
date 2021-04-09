import styled from 'styled-components';

const subColor = 'grey';

export const FormInputGroup = styled.fieldset`
  margin: 20px 0;
  z-index: 20;
`;

export const FormInputIconContainer = styled.input`
  position: absolute;

  /* clip: rect(0, 0, 0, 0); */
  /* pointer-events: none; */
  /* overflow: visible; */

  /* &.checked {
    background: red;
  } */
`;

export const FormInputIconLabel = styled.label`
  color: ${props => props.theme.fontColor};
  font-size: 14px;
  font-weight: bold;
  pointer-events: none;

  width: 150px;
  height: 150px;
`;
