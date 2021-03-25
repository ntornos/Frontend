import styled from 'styled-components';

export const DropdownContainer = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
`;

export const MenuItem = styled.ul`
  font-weight: bold;
  font-size: 15px;
  padding: 2px 10%;
  cursor: pointer;
`;

export const DropdownDivider = styled.div`
  margin-bottom: 30px;
  position: relative;
  text-align: center;
  width: 100%;
  z-index: 1;

  &::before {
    display: inline-block;
    border-top: 1px solid rgb(184, 196, 194);
    content: '';
    margin: 0px auto;
    position: absolute;
    height: 0px;
    inset: 50% 0px 0px;
    z-index: -1;
    transform: translateY(-50%);
  }
`;
