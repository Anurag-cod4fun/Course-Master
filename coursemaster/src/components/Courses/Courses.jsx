import {
  Button,
  Container,
  HStack,
  Heading,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';

const Courses = () => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');
  const categories = [
    'Web development',
    'Artificial Intelligence',
    'Data Structures & Algorithms',
    'App Development',
    'Data Science',
    'Game Development',
  ];
  return (
    <Container minH={'95vh'} maxW={'container.lg'} paddingY={'8'}>
      <Heading children="All Courses" m={'8'} />
      <Input
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        placeholder="Search a course..."
        type="text"
      />

      <HStack
        overflowX={'auto'}
        paddingY={'8'}
        css={{ "&::-webkit-scrollbar": { display: "none" } }}
      >
        {categories.map((item, index) => (
          <Button key={index} onClick={() => setCategory(item)} minW={'60'}>
            <Text children={item} />
          </Button>
        ))}
      </HStack>

      <Stack
        direction={["column","row"]}
        flexWrap={"wrap"}
        justifyContent={["flex-start", "space-evenly"]} 
        alignItems={["center","flex-start"]}
      >

        <Course

      </Stack>
    </Container>
  );
};

export default Courses;
