import styled from 'styled-components';
import Card from '../../components/card/Card';
import { Form } from 'formik';

export const CreateListingCard = styled(Card)`
  width: 95%;
  background: #fff;
  padding: 4rem 0;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 0.0625rem solid hsla(0, 0%, 74.9%, 0.7);
  box-shadow: 0 0 0.3125rem 0 rgb(0 0 0 / 20%);

  &.hideCard {
    background: black;
  }
`;

export const ModalWrapper = styled.div`
  position: relative;
  overflow-x: hidden;
  min-height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: #000000bf;
  z-index: 0;
`;

export const CreateListingForm = styled(Form)`
  width: 40%;
`;
