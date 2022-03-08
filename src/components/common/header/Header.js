import { Box, HStack, Link } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const linkStyleActive = ({ isActive }) => {
    return isActive
      ? {
          fontWeight: 'bold',
        }
      : {};
  };

  return (
    <header>
      <HStack as='nav' justifyContent='space-between'>
        <Link as={NavLink} to='/'>
          BrandLogo
        </Link>
        <HStack>
          <Box>
            <Link as={NavLink} to='/' style={linkStyleActive}>
              Home
            </Link>
          </Box>
          <Box>
            <Link as={NavLink} to='/products' style={linkStyleActive}>
              Products
            </Link>
          </Box>
          <Box>
            <Link as={NavLink} to='/blogs' style={linkStyleActive}>
              Blogs
            </Link>
          </Box>
          <Box>
            <Link as={NavLink} to='/about-us' style={linkStyleActive}>
              About Us
            </Link>
          </Box>
          <Box>
            <Link as={NavLink} to='/login'>
              Login
            </Link>
          </Box>
        </HStack>
      </HStack>
    </header>
  );
};

export default Header;
