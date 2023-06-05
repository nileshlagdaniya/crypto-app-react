import {
  Box,
  Button,
  Card,
  CardBody,
  Center,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Link,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import GitLogo from './GitLogo';

const Login = () => {
  return (
    <Box>
      <Center>
        <Stack spacing={'4'}>
          <VStack as="header" spacing={'6'} mt={'8'}>
            <GitLogo />
            <Heading
              as={'h1'}
              fontWeight={'300'}
              fontSize={'24px'}
              letterSpacing={'-0.5px'}
            >
              Sign in to GitHub
            </Heading>
          </VStack>

          <Card
            bg={'f6f8fa'}
            variant={'outline'}
            borderColor={'#d8dee4'}
            maxW="308px"
          >
            <CardBody>
              <form>
                <Stack spacing={'4'}>
                  <FormControl>
                    <FormLabel>Username or email address</FormLabel>
                    <Input
                      type="text"
                      bg="white"
                      borderColor={'#d8dee4'}
                      size="sm"
                      borderRadius={'6px'}
                    />
                  </FormControl>
                  <FormControl>
                    <HStack justifyContent={'space-between'}>
                      <FormLabel>Password</FormLabel>
                      <Button
                        as="a"
                        href="#"
                        variant={'link'}
                        size={'xs'}
                        color="#0969da"
                        fontWeight={'500'}
                      >
                        Forgot Password?
                      </Button>
                    </HStack>
                    <Input
                      type="password"
                      bg="white"
                      borderColor={'#d8dee4'}
                      size="sm"
                      borderRadius={'6px'}
                    />
                  </FormControl>
                  <Button
                    bg="#2da44e"
                    color="white"
                    size="sm"
                    _hover={{ bg: '#2c974b' }}
                    _active={{ bg: '#298e46' }}
                  >
                    Sign In
                  </Button>
                </Stack>
              </form>
            </CardBody>
          </Card>

          <Card variant={'outline'} borderColor={'#d0d7de'}>
            <CardBody>
              <Center>
                <HStack fontSize={'sm'} spacing={'1'}>
                  <Text>New to GitHub?</Text>
                  <Link isExternal color={'#0969da'}>
                    Create an account
                  </Link>
                </HStack>
              </Center>
            </CardBody>
          </Card>
        </Stack>
      </Center>

      <Center as={'footer'} mt="16">
        <HStack spacing={'4'} pt="2">
          <Link isExternal color="#0969da" href="#" fontSize={'xs'}>
            Terms
          </Link>
          <Link isExternal color="#0969da" href="#" fontSize={'xs'}>
            Privacy
          </Link>
          <Link isExternal color="#0969da" href="#" fontSize={'xs'}>
            Securty
          </Link>
          <Link isExternal color="#0969da" href="#" fontSize={'xs'}>
            Contact GitHub
          </Link>
        </HStack>
      </Center>
    </Box>
  );
};

export default Login;
