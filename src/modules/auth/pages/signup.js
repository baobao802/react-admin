import { Container, Heading, Link } from '@chakra-ui/react';
import React from 'react';
import { Link as ReactLink } from 'react-router-dom';
import { Page } from '../../../components/common';

const SignUp = () => {
  return (
    <Page title='Sign Up | Brand'>
      <section>
        <Container>
          <Heading as='h2'>SignUp</Heading>
          <Link as={ReactLink} to='/login'>
            Login
          </Link>
        </Container>
      </section>
    </Page>
  );
};

export default SignUp;
