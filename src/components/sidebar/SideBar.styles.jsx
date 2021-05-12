import styled from 'styled-components';

export const SideBarButton = styled.button`
  border: none;
  background: #f4f4f4;
  padding: 0;
  width: 100%;
  text-align: left;
  padding: 10px 7px 0 7px;
  font-family: 'CostarBrownRegular', sans-serif;
  color: #4c4c4c;
  font-size: 1rem;
  letter-spacing: 0;
  line-height: 34px;
`;

export const SideBarAside = styled.aside`
  /* position: fixed; */
  /* float: left; */
  width: 250px;
  background: #f4f4f4;
  height: calc(100vh - 70px);
  font-family: 'CostarBrownLight', sans-serif;
  /* margin-top: 61px; */
  border-right: 1px solid #ccc;
  /* z-index: 0; */
`;
