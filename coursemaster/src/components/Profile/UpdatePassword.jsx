import React, { useState } from 'react';
import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
// import { useDispatch, useSelector } from 'react-redux';
// import { updateProfile } from '../../redux/actions/profile';
// import { loadUser } from '../../redux/actions/user';
// import { useNavigate } from 'react-router-dom';

const UpdateProfile = ({ user }) => {
  const [name, setName] = useState("Anurag Patil");
  const [email, setEmail] = useState("patilanurag661@outlook.com");

//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { loading } = useSelector(state => state.profile);

//   const submitHandler = async e => {
//     e.preventDefault();
//     await dispatch(updateProfile(name, email));
//     dispatch(loadUser());
//     navigate('/profile');
//   };

  return (
    <Container py="16" minH={'90vh'}>
      <form>
        <Heading
          children="Update Profile"
          textTransform={'uppercase'}
          my="16"
          textAlign={['center', 'left']}
        />
        <VStack spacing={'8'}>
          <Input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Name"
            type="text"
            focusBorderColor="blue.500"
          />
          <Input
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
            focusBorderColor="blue.500"
          />
          <Button
            // isLoading={loading}
            w="full"
            colorScheme="blue"
            type="submit"
          >
            Update Profile
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default UpdateProfile;