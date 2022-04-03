import {
  Button,
  Container,
  Heading,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate, Link as ReactLink } from 'react-router-dom';
import { Page } from '../../../components/common';
import { login } from '../authSlice';
import { Form, Input } from '../../../components/ui/form';
import { loginValidationSchema } from '../../../utils/validation-schemas';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const from = location.state?.from?.pathname || '/';

  const _onSubmit = (values) => {
    dispatch(login(true));
    navigate(from, { replace: true });
  };

  return (
    <Page title='Login | Brand'>
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
            <Heading as='h2'>Log in</Heading>

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
                Don't have an account?{' '}
                <Link as={ReactLink} to='/signup'>
                  Sign up
                </Link>
              </Text>
              <Button type='submit' colorScheme='facebook' rounded='none'>
                Log in
              </Button>
            </Form>

            {/* <Button onClick={loginHandler}>Login</Button> */}
            {/* <Link as={ReactLink} to='/signup'>
              SignUp
            </Link> */}
          </VStack>
        </Container>
      </section>
    </Page>
  );
};

export default Login;
