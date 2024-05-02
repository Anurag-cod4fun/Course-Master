import React from 'react';
import {
  Button,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
  HStack,
  Box,
} from '@chakra-ui/react';
import './home.css';
import { Link } from 'react-router-dom';
import vg from '../../assets/images/study.svg';
import { CgGoogle, CgYoutube } from 'react-icons/cg';
import { SiCoursera, SiUdemy } from 'react-icons/si';
import { DiAws } from 'react-icons/di';
import introVideo from '../../assets/videos/intro.mp4';

function Home() {
  return (
    <section className="home">
      <div className="container">
        <Stack
          direction={['column', 'row']}
          height="100%"
          justifyContent={['center', 'space-between']}
          alignItems="center"
          spacing={['16', '56']}
        >
          <VStack width={'full'} alignItems={['center', 'flex-end']} spacing={8}>
            <Heading
              textAlign={['center', 'left']}
              children="LEARN FROM THE EXPERTS"
              size={'2xl'}
            />
            <Text
            fontSize={'2xl'}
            fontFamily={'cursive'}
              textAlign={['center', 'left']}
              children="Find Valuable Content at Resonable Price"
            />
            <Link to={'/courses'}>
              <Button size={'lg'} colorScheme="blue">
                Explore Now
              </Button>
            </Link>
          </VStack>

          <Image
            className="vector-graphics"
            boxSize={'md'}
            src={vg}
            objectFit={'contain'}
          />
        </Stack>
      </div>

      <Box padding={'8'} bg="blackAlpha.800">
        <Heading
          textAlign={'center'}
          fontFamily="body"
          color={'blue.400'}
          children="Our Brands"
        />
        <HStack
          className="brandsBanner"
          justifyContent={'space-evenly'}
          marginTop="4"
        >
          <CgGoogle />
          <CgYoutube />
          <SiCoursera />
          <SiUdemy />
          <DiAws />
        </HStack>
      </Box>

      <div className="container2">
        <video
          autoPlay={true}
          controls
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          muted  
          src={introVideo}
        ></video>
      </div>
    </section>
  );
}

export default Home;
