import {
  Avatar,
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const fileUploadCss = {
  cursor: "pointer",
      marginLeft: "-5%",
      border: "none",
      // height: "100%",
      width:"110%",
      color: "#3182CE",
      backgroundColor: "#F7FAFC",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "0.5rem 1rem",
      borderRadius: "8px",
      transition: "background-color 0.3s ease-in-out",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
}

const fileUploadStyle = {
    "&::file-selector-button": fileUploadCss,
    "&:hover::file-selector-button": {
      backgroundColor: "white",
    },
  };
  
  
const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [imagePrev, setImagePrev] = useState('');
  const [image, setImage] = useState('');

  const changeImageHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = ()=>{
      setImagePrev(reader.result);
      setImage(file);
    };
  };

  
  return (
    <Container>
      <VStack  justifyContent={'center'} spacing={'16'} mt={'50px'}>
        <Heading textTransform={'uppercase'} children={'Register'} />

        <form style={{ width: '100%' }}>
          <Box my={'4'} display={'flex'} justifyContent={'center'}>
            <Avatar src={imagePrev} size={'2xl'} />
          </Box>

          {/* Name component */}
          <Box my={'4'}>
            <FormLabel htmlFor="name" children="Name" />
            <Input
              required
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Eg. Anurag Patil"
              type="text"
              focusBorderColor="blue.500"
            />
          </Box>

          {/* email component */}
          <Box my={'4'}>
            <FormLabel htmlFor="email" children="Email Address" />
            <Input
              required
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="abc@gmail.com"
              type="email"
              focusBorderColor="blue.500"
            />
          </Box>

          {/* password component  */}
          <Box my={'4'}>
            <FormLabel htmlFor="password" children="Password" />
            <Input
              required
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Eg. Lu#7Yz1@"
              type="password"
              focusBorderColor="blue.500"
            />
          </Box>

          {/* choose Avatar  */}
          <Box my={'4'}>
            <FormLabel htmlFor="chooseAvatar" children="Choose Avatar" />
            <Input
              accept="image/*"
              required
              id="chooseAvatar"
              type={'file'}
              focusBorderColor="blue.500"
              css={fileUploadStyle}
              onChange={changeImageHandler}
            />
          </Box>

          <Button my={'4'} colorScheme="blue" type="submit">
            Sign Up
          </Button>

          <Box my={'4'}>
            Already Signed Up?{' '}
            <Link to={'/login'}>
              <Button colorScheme="blue" variant={'link'}>
                Login
              </Button>{' '}
              here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};
export default Register;
