import styled from 'styled-components';

export const PlacesAutoCompleteContainer = styled.div`
  width: 45%;
  margin: 2rem 0;
  /* display: flex; */
`;

export const PlacesAutoCompleteInput = styled.input`
  width: calc(100% - 8.5rem);
  padding: 0px 0.75rem;
  height: 2.8rem;
  border: 1px solid #b1b1b1;
  border-radius: 0.25rem;
  opacity: 0.96;
  color: #4c4c4c;
  font-size: 1rem;

  position: relative;
`;

export const PlacesAutoCompleteUL = styled.ul`
  width: calc(100% - 6.9rem);
  padding: 0;
  margin: 0;
  list-style-type: none;
  background: white;
  border: none;
  opacity: 0.95;
  overflow: hidden;
`;

export const PlacesAutoCompleteLI = styled.li`
  margin: 0;
  padding: 0.5rem 0.75rem;
  cursor: pointer;

  &:hover {
    background-color: #d28b1098;
  }
`;

export const PlacesAutoCompleteButton = styled.button`
  width: 18%;
  height: 2.8rem;
  margin: 0 0.5rem;
  border: 1px solid #d28b10;
  border-radius: 0.25rem;
  opacity: 0.95;
  font-size: 1rem;
  font-weight: bold;
  background: #d28b10;
  color: #fff;
  cursor: pointer;
`;
