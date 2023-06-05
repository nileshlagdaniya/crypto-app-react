import { Button, Heading, VStack } from '@chakra-ui/react';
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import TextField from './TextField';

const FormikForm = () => {
  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      validationSchema={Yup.object({
        username: Yup.string()
          .required('Username Required...')
          .min(6, 'Username is too short'),
        password: Yup.string()
          .required('Password Required...')
          .min(8, 'Password is too short'),
      })}
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values, null, 2));
        actions.resetForm();
      }}
    >
      {formik => (
        <VStack
          as="form"
          mx="auto"
          w={{ base: '90%', md: 500 }}
          h={'100vh'}
          justifyContent={'center'}
          onSubmit={formik.handleSubmit}
        >
          <Heading>Sign Up</Heading>
          <TextField name="username" placeholder="enter username" />
          <TextField
            name="password"
            placeholder="enter password"
            type="password"
          />

          <Button type="submit" variant={'outline'} colorScheme="teal">
            Create Acc
          </Button>
        </VStack>
      )}
    </Formik>
  );
};

export default FormikForm;
