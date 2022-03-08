import { Container, Heading, Link } from '@chakra-ui/react';
import React from 'react';
import { Link as ReactLink } from 'react-router-dom';

const SignUp = () => {
  return (
    <Container>
      <Heading as='h2'>SignUp</Heading>
      <Link as={ReactLink} to='/login'>
        Login
      </Link>
    </Container>
  );
};

export default SignUp;
