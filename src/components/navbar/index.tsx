import { Box, Button, Container, Fade, Flex, Icon, Stack, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { LogoPrimary } from "../logo";
import { BsSun, BsMoon } from "react-icons/bs";
import { useEffect, useState } from "react";

const ToggleColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button
      size={'sm'}
      onClick={toggleColorMode}
    >
      {colorMode === 'light' ? <Icon as={BsMoon} /> : <Icon as={BsSun} />}
    </Button>
  )
}

const ButtonDownloadApp = () => {
  return (
    <Button
      size={'sm'}
      fontSize={'sm'}
      colorScheme="yellow"
      cursor={'pointer'}
      display={{ base: 'none', md: 'inline-flex' }}
    >
      Download App
    </Button>
  )
}

export default function Navbar() {
  const [showDownloadApp, setShowDownloadApp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowDownloadApp(window.scrollY > 300);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box w={'full'}
      bg={useColorModeValue('white', 'gray.800')}
      border={'1px'}
      borderColor={useColorModeValue('gray.200', 'gray.800')}
      pos={'sticky'}
      top={0}
      py={3}
      px={{ base: 3, md: 0 }}
      zIndex={999}
    >
      <Container maxW={'1600px'} >
        <Flex
          justify={'space-between'}
          align={'center'}
        >
          <Flex align={'center'} gap={4}>
            <LogoPrimary boxSize={{ base: 7, md: 8 }} h={'fit-content'} />
            <Stack spacing={0}>
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                fontWeight={'bold'}
                color={'#FFC120'}
              >
                OurCulture
              </Text>
              <Text
                fontSize={{ base: 'xs', md: 'sm' }}
                color={useColorModeValue('gray.600', 'gray.400')}
              >
                Capstone Project - 2023
              </Text>
            </Stack>
          </Flex>

          <Flex gap={5} align={'center'}>
            <ToggleColorMode />
            {showDownloadApp && <ButtonDownloadApp />}
          </Flex>

        </Flex>
      </Container>
    </Box>
  )
}