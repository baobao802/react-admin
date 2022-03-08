import { Container, Link, List, ListItem } from '@chakra-ui/react';
import React from 'react';
import { Link as ReactLink, useLocation } from 'react-router-dom';
import { Page } from '../../../components/common';

const Products = (props) => {
  const location = useLocation();

  return (
    <Page title='List products'>
      <section>
        <Container maxW='container.xl'>
          <List>
            <ListItem>
              <Link
                as={ReactLink}
                to='/products/1'
                state={{ backgroundLocation: location }}
              >
                Product 1
              </Link>
            </ListItem>
            <ListItem>
              <Link
                as={ReactLink}
                to='/products/2'
                state={{ backgroundLocation: location }}
              >
                Product 2
              </Link>
            </ListItem>
            <ListItem>
              <Link
                as={ReactLink}
                to='/products/3'
                state={{ backgroundLocation: location }}
              >
                Product 3
              </Link>
            </ListItem>
          </List>
        </Container>
      </section>
    </Page>
  );
};

export default Products;
