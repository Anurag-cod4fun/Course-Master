import React from 'react';
import { Box, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';

const NotFoundPage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Box textAlign="center">
        <Box as={FaExclamationTriangle} size="10em" color="yellow.400" mx="auto" />
        <Text fontSize="6xl" fontWeight="bold" color="red.500" mt={2}>
          Oops! Page not found.
        </Text>
        <Text fontSize="2xl" color="gray.500" mt={4}>
          The page you are looking for doesn't exist or has been moved.
        </Text>
        <Link to="/">
          <Button mt={8} colorScheme="teal" size="lg">
            Go to Home
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default NotFoundPage;
