import styled from 'styled-components';

const subColor = 'grey';

export const FormInputGroup = styled.div`
  margin: 20px 0;
`;

export const FormInputIconContainer = styled.input`
  position: absolute;

  clip: rect(0, 0, 0, 0);
  pointer-events: none;
  overflow: visible;

  &:focus {
    outline: none;
  }

  &.checked {
    background: red;
  }
`;

export const FormInputIconLabel = styled.label`
  color: ${props => props.theme.fontColor};
  font-size: 14px;
  font-weight: bold;
  pointer-events: none;
`;
