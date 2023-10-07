import { Box, Container, Heading, VStack, Text,Button} from '@chakra-ui/react';
import React from 'react';
import { RiCheckboxCircleFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const PaymentSuccess = () => {
  return (
    <Container h="90vh" p="16" >
      <Heading my="8" textAlign={'center'}>
        You have the pro pack
      </Heading>
      <VStack
        boxShadow={'lg'}
        pb={'16'}
        alignItems={'center'}
        borderRadius={'lg'}
        bg="rgba(144, 238, 144, 0.2)"
      >
        <Box
          w="full"
          bg="green.400"
          p="4"
          css={{ borderRadius: '8px 8px 0 0' }}
        >
          <Text fontWeight="bold" textAlign={"center"} color={'white'}>Payment Success</Text>
        </Box>
        <Box p="4" >
          <VStack textAlign={'center'} px="8" mt="4" spacing={'8'}>
            <Text>
              Congratulations! You're a pro member. You have access to premium
              content.
            </Text>
            <Heading size={"4xl"}>
              <RiCheckboxCircleFill />
            </Heading>
          </VStack>
        </Box>

        <Link to={'/profile'}>
          <Button colorScheme='green' variant={'ghost'}>Go to Profile</Button>
        </Link>
        
        <Heading size={'xs'} children="Transaction ID: K7pN5qB2fT"/>
      </VStack>
    </Container>
  );
};

export default PaymentSuccess;
