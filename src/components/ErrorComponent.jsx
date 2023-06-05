import { Alert, AlertIcon } from '@chakra-ui/react';
import React from 'react';

const ErrorComponent = ({ messeges }) => {
  return (
    <Alert
      status="error"
      pos={'fixed'}
      bottom={'4'}
      left={'50%'}
      transform={'translateX(-50%)'}
      w={'container.lg'}
    >
      <AlertIcon />
      {messeges}
    </Alert>
  );
};

export default ErrorComponent;
