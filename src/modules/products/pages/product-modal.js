import {
  Box,
  Button,
  Container,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import React from 'react';
import { useParams } from 'react-router-dom';
import { Page, PageModal } from '../../../components/common';

const Product = (props) => {
  const { productId } = useParams();

  return (
    <Page title={`Modal Page ${productId}`}>
      <PageModal title={`Modal Page ${productId}`}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
        similique laborum, id ratione et, possimus, porro explicabo architecto
        doloribus voluptates impedit praesentium modi eum consequuntur ipsum
        asperiores? Praesentium, eligendi eum.
      </PageModal>
    </Page>
  );
};

export default Product;
