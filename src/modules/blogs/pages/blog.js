import { Box, Button, Container } from '@chakra-ui/react';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Blog = () => {
  const { blogId } = useParams();
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <Container>
      <Box>
        <Button onClick={goBack}>Go Back</Button>
      </Box>
      <Box>Blog {blogId}</Box>
    </Container>
  );
};

export default Blog;
