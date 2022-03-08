import { Button, Container, Heading, Link } from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate, Link as ReactLink } from 'react-router-dom';
import { Page } from '../../../components/common';
import { login } from '../authSlice';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const from = location.state?.from?.pathname || '/';

  const loginHandler = () => {
    dispatch(login(true));
    navigate(from, { replace: true });
  };

  return (
    <Page title='Login | Brand'>
      <section>
        <Container>
          <Heading as='h2'>Login</Heading>
          <Button onClick={loginHandler}>Login</Button>
          <Link as={ReactLink} to='/signup'>
            SignUp
          </Link>
        </Container>
      </section>
    </Page>
  );
};

export default Login;
