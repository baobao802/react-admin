import { Container, Heading } from '@chakra-ui/react';
import React from 'react';
import { useParams } from 'react-router-dom';
import { Page } from '../../../components/common';

const Product = (props) => {
  const { productId } = useParams();

  return (
    <Page title='Product details'>
      <section>
        <Container maxW='container.xl'>
          <Heading>Product {productId}</Heading>
        </Container>
      </section>
    </Page>
  );
};

export default Product;
