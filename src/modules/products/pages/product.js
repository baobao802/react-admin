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
import { useNavigate, useParams } from 'react-router-dom';

const Product = (props) => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <>
      <Modal isOpen>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Product {productId}</ModalHeader>
          <ModalCloseButton onClick={goBack} />
          <ModalBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi qui
            quis delectus optio tenetur dolor labore laborum eveniet voluptates
            fugiat, error nam perferendis officiis tempora ipsa minus nemo, vel
            tempore!
          </ModalBody>

          <ModalFooter>
            <Button
              variant='outline'
              colorScheme='blue'
              mr={3}
              onClick={goBack}
            >
              Close
            </Button>
            <Button colorScheme='blue' mr={3}>
              Add To Cart
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Product;
