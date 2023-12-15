import Footer from "@/components/footer";
import SectionAsked from "@/components/home/asked";
import Navbar from "@/components/navbar";
import { Box, useColorModeValue, Flex, Button, Image, useColorMode } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState<boolean>(false);
  const { colorMode } = useColorMode();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShow(true);
      } else {
        setShow(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);

  }, []);
  return (
    <Flex
      w={'full'}
      minH={'100dvh'}
      direction={'column'}
    >

      <Navbar />

      <Box as="main"
        bg={useColorModeValue('white', 'gray.900')}
        flex={1}
      >
        {children}
      </Box>

      <Box
        display={{ base: show ? 'flex' : 'none', md: 'none' }}
        position={'fixed'}
        zIndex={9999}
        bottom={3}
        right={3}
      >
        <Button
          size="sm"
          fontSize={'xs'}
          colorScheme="yellow"
        >
          Download App
        </Button>
      </Box>

      <Box pos={'relative'} bg={useColorModeValue('white', 'gray.800')}>
        <Box pos={'absolute'} zIndex={0} top={0}>
          <Image as="img"
            src="/hero-white.png"
            alt="hero"
            w={'full'}
            h={{ base: '100dvh', md: '100dvh' }}
            objectFit="cover"
            display={colorMode === 'light' ? 'block' : 'none'}
          />
          <Image as="img"
            src="/hero-dark.png"
            alt="hero"
            w={'full'}
            h={{ base: '100dvh', md: '100dvh' }}
            objectFit="cover"
            display={colorMode === 'light' ? 'none' : 'block'}
          />
        </Box>
        <Box pos={'relative'} zIndex={0}>
          <SectionAsked />
          <Box
            w={{ base: 'full', sm: 'md' }}
            mx={'auto'}
          >
            <Image src="/astrocat.png" alt="astrocat" objectFit={'cover'} />
          </Box>
          <Box bg={useColorModeValue('gray.50', 'gray.900')} mt={-10}>
            <Footer />
          </Box>
        </Box>
      </Box>
    </Flex>
  )
}