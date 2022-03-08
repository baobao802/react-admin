import { Container, Heading } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Container>
      <Heading as='h2'>Page Not Found!</Heading>
      <Link to='/'>Go Home</Link>
    </Container>
  );
};

export default NotFound;
