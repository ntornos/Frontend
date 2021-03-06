import styled from 'styled-components';

export const FormInputGroup = styled.div`
  padding: 0;
  border: none;
  &:checked {
    color: #c77a06;
    border-color: #c77a06;
    background-color: #f2f9e9;
  }
`;

export const FormInputIconsRadio = styled.input`
  position: absolute;
  clip: rect(0, 0, 0, 0);
  pointer-events: none;
  overflow: visible;
`;

export const FormInputIconLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 185px;
  height: 70px;
  padding: 15px;
  text-decoration: none;
  box-sizing: border-box;
  cursor: pointer;
  border: 0.0625rem solid #bfbfbf;
  user-select: none;
  border-radius: 8px;

  &:hover {
    border: 1px solid black;
  }

  &.checked {
    color: #c77a06;
    border-color: #c77a06;
    background-color: #f2f9e9;
  }
`;
