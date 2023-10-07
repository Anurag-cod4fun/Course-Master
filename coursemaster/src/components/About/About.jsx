import {
  Avatar,
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import introVideo from '../../assets/videos/intro.mp4';
import { RiSecurePaymentFill } from 'react-icons/ri';
import termsAndCondtion from '../../assets/docs/termsAndConditions';

const Founder = () => (
  <Stack direction={['column', 'row']} spacing={['4', '16']} padding={'8'}>
    <VStack>
      <Avatar
        src="https://avatars.githubusercontent.com/u/73098953?v=4"
        boxSize={['40', '48']}
      />
      <Text children="Co-Founder" opacity={0.7} />
    </VStack>

    <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
      <Heading children="Anurag Patil" size={['md', 'xl']} />
      <Text
        textAlign={['center', 'left']}
        children={
          'Hi, I am a full-stack developer and a ML enthusiast. Our mission is to provide quality content at reasonable price.'
        }
      />
    </VStack>
  </Stack>
);

const VideoPlayer = () => (
  <Box>
    <video
      autoPlay={true}
      loop
      controls
      controlsList="nodownload nofullscreen noremoteplayback"
      disablePictureInPicture
      disableRemotePlayback
      muted
      src={introVideo}
    ></video>
  </Box>
);

const TandC = ({ termsAndCondtion }) => (
  <Box>
    <Heading
      size={'md'}
      children="Terms & Condtion"
      textAlign={['center', 'left']}
      my={'4'}
    />
    <Box h={'sm'} p={'4'} overflowY={'scroll'}>
      <pre
        textAlign={['center', 'left']}
        letterSpacing={'widest'}
        fontFamily={'heading'}
        style={{
            fontFamily: "Courier, monospace",
            fontSize: "14px",
            whiteSpace: "pre-wrap",
            textAlign: "left",
            letterSpacing: "normal",
            maxWidth: "100%",  // Ensure the text does not overflow the screen
            margin: "0 auto"   // Center the content
          }}
      >
        {termsAndCondtion}
      </pre>

      <Heading
        my={'4'}
        size={'xs'}
        children="Refund only applicable for cancellation within 7 days."
      />
    </Box>
  </Box>
);

const About = () => {
  return (
    <Container maxW={'container.lg'} padding={'16'} boxShadow={'lg'}>
      <Heading children="About Us" textAlign={['center', 'left']} />
      <Founder />
      <Stack m="8" direction={['column', 'row']} alignItems="center">
        <Text fontFamily={'cursive'} m={'8'} textAlign={['center', 'left']}>
          We are a video streaming platform with some premium courses available
          only for premium users.
        </Text>
        <Link to={'/subscribe'}>
          <Button variant={'ghost'} colorScheme="blue">
            Checkout Our Plan
          </Button>
        </Link>
      </Stack>
      <VideoPlayer />

      <TandC termsAndCondtion={termsAndCondtion} />
      <HStack my={'4'} p={'4'}>
        <RiSecurePaymentFill />
        <Heading
          size={'xs'}
          fontFamily={'sans-serif'}
          textTransform={'uppercase'}
          children={'Patment is secured by Razorpay'}
        />
      </HStack>
    </Container>
  );
};

export default About;
