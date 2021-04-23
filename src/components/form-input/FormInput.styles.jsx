import styled from 'styled-components';

const subColor = 'grey';

export const Group = styled.div`
  margin-top: 20px;
  min-width: 280px;

  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;

export const FormInputContainer = styled.input`
  background: none;
  background-color: ${props => props.theme.body};
  color: ${props => props.theme.fontColor};
  font-size: 14px;
  padding: 10px;
  display: block;
  width: 90%;
  border: none;
  border-radius: 3px;
  border: 1px solid ${subColor};
  margin-top: 5px;

  &:focus {
    outline: none;
  }
`;

export const FormInputLabel = styled.label`
  color: ${props => props.theme.fontColor};
  font-size: 14px;
  font-weight: bold;
  pointer-events: none;
`;
