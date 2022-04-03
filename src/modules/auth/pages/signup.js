import {
  Button,
  Container,
  Heading,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { useNavigate, Link as ReactLink } from 'react-router-dom';
import { Page } from '../../../components/common';
import { Form, Input } from '../../../components/ui/form';
import { loginValidationSchema } from '../../../utils/validation-schemas';

const Signup = () => {
  const navigate = useNavigate();

  const _onSubmit = (values) => {
    console.log(values);
    navigate('/login', { replace: true });
  };

  return (
    <Page title='Sing up | Brand'>
      <section>
        <Container
          maxW='md'
          minH='var(--main-height)'
          display='flex'
          flexDir='column'
          alignItems='center'
          justifyContent='center'
        >
          <VStack w='full' spacing='5' p='8' shadow='lg'>
            <Heading as='h2'>Sign up</Heading>

            <Form
              validationSchema={loginValidationSchema}
              onSubmit={_onSubmit}
              w='full'
              alignItems='start'
              spacing='5'
            >
              <Input
                type='text'
                name='username'
                placeholder='Username'
                size='lg'
                rounded='none'
              />
              <Input
                type='password'
                name='password'
                placeholder='Password'
                size='lg'
                rounded='none'
              />
              <Text>
                Already have an account?{' '}
                <Link as={ReactLink} to='/login'>
                  Log in
                </Link>
              </Text>
              <Button type='submit' colorScheme='facebook' rounded='none'>
                Sign up
              </Button>
            </Form>
          </VStack>
        </Container>
      </section>
    </Page>
  );
};

export default Signup;
