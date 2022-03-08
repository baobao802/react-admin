import { Container, Heading, Link } from '@chakra-ui/react';
import React from 'react';
import { useLocation, useNavigate, Link as ReactLink } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  // setTimeout(() => {
  //   navigate(from, { replace: true });
  // }, 2000);

  return (
    <Container>
      <Heading as='h2'>Login</Heading>
      <Link as={ReactLink} to='/signup'>
        SignUp
      </Link>
    </Container>
  );
};

export default Login;
