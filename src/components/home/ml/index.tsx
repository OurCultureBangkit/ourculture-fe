import { Avatar, Container, Flex, Stack, Text, useColorModeValue } from "@chakra-ui/react"

export default function SectionML() {
  return (
    <Container maxW={'7xl'} py={10}>
      <Stack maxW={'4xl'} textAlign={'center'} mx={'auto'}>
        <Text
          fontSize={{ base: '3xl', md: '4xl' }}
          fontWeight={'black'}
        >
          &quot;Machine Learning&quot; is the Power Here.
        </Text>
        <Text
          maxW={{ base: 'full', md: '2xl' }}
          mx={'auto'}
          color={useColorModeValue('gray.500', 'gray.400')}
          lineHeight={'1.8'}
        >
          I have experienced in Machine Learning for 3 years. And all my journey that
          make me to be a Machine Learning Engineer is here. This e-commerce powered by
          Machine learning, to search cultures based on the given image. It is the power here.
          I really think that Machine Learning is the future. And I want to be a part of it.
        </Text>

        <Flex justify={'center'} align={'center'} gap={3} py={5}>
          <Avatar src={'/teguh.jpg'} />
          <Stack textAlign={'start'} spacing={0}>
            <Text
              fontSize={'md'}
              fontWeight={'bold'}
            >
              Teguh Permana
            </Text>
            <Text
              fontSize={'sm'}
              color={useColorModeValue('gray.500', 'gray.400')}
            >
              ML Engineer of Ourculture
            </Text>
          </Stack>
        </Flex>
      </Stack>
    </Container >
  )
}