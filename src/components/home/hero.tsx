import { Button, Container, Flex, Image, Stack, Text, useColorModeValue } from "@chakra-ui/react";

export default function Hero() {
  return (
    <Container maxW={'1600px'}>
      <Flex
        minH={'50vh'}
        w={'full'}
        justify={'center'}
        align={'center'}
        direction={'column'}
        py={{ base: 8, md: 0 }}
      >
        <Stack
          maxW={'6xl'}
          textAlign={{ md: 'center' }}
          spacing={3}
          align={{ md: 'center' }}
        >
          <Text color={'#FFC120'} fontWeight={'medium'} fontSize={{ md: 'lg' }}>
            Capstone Project - Bangkit Academy 2023
          </Text>
          <Text
            fontSize={{ base: '2xl', md: '4xl' }}
            fontWeight={'bold'}
          >
            Come Join Us On Our Journey.
            E-Commerce With Powerful Machine Learning.
            We Are The Future Of E-Commerce.
          </Text>
          <Text
            color={useColorModeValue('gray.500', 'gray.400')}
            fontSize={{ base: 'md', md: 'xl' }}
            maxW={'4xl'}
            mx={'auto'}
            textTransform={'capitalize'}
          >
            When else can you use e-commerce with machine learning to search for data based on the given image. everything is possible with us.
          </Text>
          <Button
            size={'md'}
            fontSize={'sm'}
            colorScheme="yellow"
            cursor={'pointer'}
            w={'fit-content'}
            px={10}
          >
            Download App
          </Button>
        </Stack>
      </Flex>
    </Container>
  )
}