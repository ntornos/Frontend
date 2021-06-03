import styled from 'styled-components';

export const ListingEditFormMainContainer = styled.div`
  border: 1px solid black;
  border-radius: 0.25rem;
  overflow: hidden;
  background-color: #fff;
  border: 0.0625rem solid hsla(0, 0%, 74.9%, 0.7);
  box-shadow: 0 0 0.3125rem 0 rgb(0 0 0 / 20%);
  padding: 0 0.75rem;
  min-height: 200px;

  display: flex;
  flex-wrap: wrap;
`;

export const Input = styled.input`
  /* &::placeholder {
    color: red;
    visibility: visible;
  } */

  transition: all 0.2s ease-in-out;
  width: 100%;
  height: 2.5rem;
  box-sizing: border-box;
  color: #4c4c4c;
  background-color: #fff;
  padding: 0.4375rem 0.4375rem 0.375rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  margin-top: 0.25rem;
  border: 0.0625rem solid #bfbfbf;
  -webkit-appearance: none;
`;

export const Label = styled.label`
  position: relative;

  &::after {
    content: attr(data-placeholder);
    position: absolute;
    color: red;
    z-index: 1;
    top: 1em;
    right: 1em;
  }
`;
