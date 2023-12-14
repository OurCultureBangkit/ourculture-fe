import { Button, Container, Stack, Text, useColorModeValue } from "@chakra-ui/react";

export default function SectionAbout() {
  return (
    <Container maxW={'7xl'} py={24}>
      <Stack maxW={'3xl'} px={{ base: 3, md: 0 }}>
        <Text color={'#ffc120'}>
          Control the search
        </Text>
        <Text
          fontSize={{ base: '2xl', md: '4xl' }}
          fontWeight={'black'}
        >
          Search whatever you want, control it.
        </Text>
        <Text
          fontSize={{ base: 'sm', md: 'md' }}
          color={useColorModeValue('gray.500', 'gray.400')}
          fontWeight={'medium'}
          pb={5}
        >
          Because in ourculture you can find anything you want. The future of e-commerce is here.
          You absolutely can find about culture just by using an image.
          Then the image will be processed by our AI and you will get the result as soon as possible.
        </Text>

        <Button
          size={'sm'}
          w={'fit-content'}
          px={5}
          colorScheme={'yellow'}
        >
          Learn More
        </Button>
      </Stack>
    </Container>
  )
}