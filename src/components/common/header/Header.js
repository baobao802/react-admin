import { Box, Button, HStack, Link } from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { logout } from '../../../modules/auth/authSlice';
import styles from './Header.module.css';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const linkStyleActive = ({ isActive }) => {
    return isActive
      ? {
          fontWeight: 'bold',
        }
      : {};
  };

  const logoutHandler = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <header className={styles.header}>
      <HStack as='nav' justifyContent='space-between' w='full' mx='5'>
        <Link as={NavLink} to='/'>
          BrandLogo
        </Link>
        <HStack spacing='5'>
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
            <Button
              variant='unstyled'
              fontWeight='normal'
              onClick={logoutHandler}
            >
              Logout
            </Button>
          </Box>
        </HStack>
      </HStack>
    </header>
  );
};

export default Header;
