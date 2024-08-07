import {
  Box,
  Text,
  Grid,
  Heading,
  Stack,
  HStack,
  Progress,
} from '@chakra-ui/react';
import React from 'react';
import cursor from '../../../assets/images/cursor.png';
import Sidebar from '../Sidebar';
import { RiArrowUpLine, RiArrowDownLine } from 'react-icons/ri';
import { DoughnutChart, LineChart } from './Chart';

const Databox = ({ title, qty, qtyPercentage, profit }) => (
  <Box
    w={['full', '20%']}
    boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
    p="8"
    borderRadius={'lg'}
  >
    <Text children={title} />
    <HStack spacing={'6'}>
      <Text children={qty} fontSize={'2xl'} fontWeight={'bold'} />
      <HStack>
        <Text children={`${qtyPercentage}%`} />
        {profit ? (
          <RiArrowUpLine color="green" />
        ) : (
          <RiArrowDownLine color="red" />
        )}
      </HStack>
    </HStack>
    <Text children={'Since Last Month'} opacity={0.6} />
  </Box>
);

const Bar = ({ title, value, profit }) => (
  <Box py="4" px={['0', '20']}>
    <Heading children={title} size="sm" mb="2" />
    <HStack w="full" alignItems={'center'}>
      <Text children={profit ? '0%' : `-${value}%`} />
      <Progress w="full" value={profit ? value : 0} colorScheme="purple" />
      <Text children={`${value > 100 ? value : 100}%`} />
    </HStack>
  </Box>
);

const Dashboard = () => {
  return (
    <Grid
      minH="100vh"
      templateColumns={['1fr', '5fr 1fr']}
      css={{
        cursor: `url(${cursor}),default`,
      }}
    >
      <Box boxSizing="border-box" py="16" px={['4', '0']}>
        <Text
          textAlign="center"
          opacity={0.5}
          children={`Last change was on ${String(new Date()).split('G')[0]}`}
        />
        <Heading
          children={'Dashboard'}
          ml={['0', '16']}
          mb="16"
          textAlign={['center', 'left']}
        />

        <Stack
          direction={['column', 'row']}
          minH="24"
          justifyContent={'space-evenly'}
          maxW={['100%', '100%']}
        >
          <Databox title="Views" qty={50} qtyPercentage={80} profit={true} />
          <Databox title="Users" qty={1500} qtyPercentage={70} profit={true} />
          <Databox
            title="Subscription"
            qty={2000}
            qtyPercentage={52}
            profit={false}
          />
        </Stack>

        <Box
          m={['0', '16']}
          borderRadius={'lg'}
          p={['0', '16']}
          mt={['4', '16']}
          boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
        >
          <Heading
            children="Views Graph"
            textAlign={['center', 'left']}
            size="md"
            pt={['8', '0']}
            ml={['0', '16']}
          />
          <LineChart  />
        </Box>

        <Grid templateColumns={['1fr', '2fr 1fr']}>
          <Box p="4">
            <Heading
              children="Progress Bar"
              textAlign={['center', 'left']}
              size="md"
              my="8"
              ml={['0', '16']}
            />
            <Box>
              <Bar title="Views" value={30} profit={true} />
              <Bar title="Users" value={78} profit={true} />
              <Bar title="Subscription" value={48} profit={false} />
            </Box>
          </Box>
          <Box p={['0', '16']} boxSizing={'border-box'} py="4">
            <Heading textAlign={'center'} size={'md'} mb="4" children="Users" />
            <DoughnutChart
              users={[2000, 8000 - 2000]}
            />
          </Box>
        </Grid>
      </Box>
      <Sidebar />
    </Grid>
  );
};

export default Dashboard;
