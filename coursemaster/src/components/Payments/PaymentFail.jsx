import React from 'react';
import { Box, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';

const PaymentFail = () => {
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
          Payment Failed!
        </Text>
        <Text fontSize="2xl" color="gray.500" mt={4}>
          Please try again, with any other payment method.
        </Text>
        <Link to="/subscribe">
          <Button mt={8} colorScheme="teal" size="lg">
            Retry
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default PaymentFail