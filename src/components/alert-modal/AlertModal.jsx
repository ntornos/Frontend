import React from 'react';
import { Container, Text } from '../UtilityComponents';
import { Button, AlertModalCard } from './AlertModal.styles';

const AlertModal = ({ onSubmit, onCancel, children }) => {
  return (
    <AlertModalCard>
      <Container display='flex' width='100%' justify='center' margin='0 0 4rem 0'>
        <Text fontSize='26px'>{children}</Text>
      </Container>

      <Container display='flex' width='100%' justify='center'>
        <Button width='15%' onClick={onSubmit}>
          Continue
        </Button>
        <Button width='15%' onClick={onCancel}>
          Later
        </Button>
      </Container>
    </AlertModalCard>
  );
};

export default AlertModal;
