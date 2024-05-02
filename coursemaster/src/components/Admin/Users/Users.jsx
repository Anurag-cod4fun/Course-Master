import {
  Box,
  Grid,
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  HStack,
  Button,
} from '@chakra-ui/react';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import React from 'react';
import cursor from '../../../assets/images/cursor.png';
import Sidebar from '../Sidebar';

const Users = () => {
  const updateHandler = userId => {
    console.log('Updated');
    // dispatch(updateUserRole(userId));
  };
  const deleteButtonHandler = userId => {
    console.log('Deleted');
    // dispatch(deleteUser(userId));
  };

  const users = [
    {
      _id: 'abceknslfn646',
      name: 'Anurag',
      role: 'admin',
      subscription: {
        status: 'active',
      },
      email: 'patilanurag661@gmail.com',
    },
    {
      _id: 'abceknslfn646',
      name: 'Raju',
      role: 'student',
      subscription: {
        status: 'active',
      },
      email: 'raju@hotmail.com',
    },
    {
      _id: 'abceknslfn646',
      name: 'Babu',
      role: 'student',
      subscription: {
        status: 'active',
      },
      email: 'babu@gmail.com',
    },
  ];

  return (
    <Grid
      minH="100vh"
      templateColumns={['1fr', '5fr 1fr']}
      css={{
        cursor: `url(${cursor}),default`,
      }}
    >
      <Box p={['0', '16']} overflow={'auto'}>
        <Heading
          children="All Users"
          textTransform={'uppercase'}
          my="16"
          textAlign={['center', 'left']}
        />
        <TableContainer w={['100vw', 'full']}>
          <Table variant={'simple'} size="lg">
            <TableCaption>All Available users in the Database</TableCaption>
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Role</Th>
                <Th>Subscription</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {users &&
                users.map(item => (
                  <Row
                    key={item._id}
                    item={item}
                    updateHandler={updateHandler}
                    deleteButtonHandler={deleteButtonHandler}
                  />
                ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>

      <Sidebar />
    </Grid>
  );
};

export default Users;

function Row({ item, updateHandler, deleteButtonHandler, loading }) {
  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td>{item.name}</Td>
      <Td>{item.email}</Td>
      <Td>{item.role}</Td>
      <Td>
        {item.subscription && item.subscription.status === 'active'
          ? 'Active'
          : 'Not Active'}
      </Td>
      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button
            onClick={() => updateHandler(item._id)}
            variant={'outline'}
            color={'blue.500'}
          >
            Change Role
          </Button>
          <Button
            onClick={() => deleteButtonHandler(item._id)}
            color={'blue.600'}
          >
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
}
