import styled from 'styled-components';

export const PlacesAutoCompleteContainer = styled.div`
  width: 100%;

  &.homepage {
    margin: 2rem 0;
  }
`;

export const PlacesAutoCompleteInput = styled.input`
  border: 1px solid #b1b1b1;
  border-radius: 0.25rem;
  opacity: 0.96;
  color: #4c4c4c;
  font-size: 1rem;
  position: relative;

  &.homepage {
    padding: 0.65rem;
    width: calc(75% - 1.3rem);
  }

  &.create-listing {
    padding: 0.65rem;
    width: calc(100% - 1.3rem);
  }
`;

export const PlacesAutoCompleteUL = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
  background: white;
  opacity: 0.95;

  &.homepage {
    width: 75%;
    border: 1px solid #b1b1b1;
    border-top: none;
  }

  &.create-listing {
    width: 100%;
    border: 1px solid #b1b1b1;
    border-top: none;
  }
`;

export const PlacesAutoCompleteLI = styled.li`
  margin: 0;
  padding: 0.5rem 0.75rem;
  cursor: pointer;

  &:hover {
    background-color: #d28b1098;
  }

  &.homepage {
    border-bottom: 0.025rem solid #e6e4e4;
  }

  &.create-listing {
    border-bottom: 0.025rem solid #e6e4e4;
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
