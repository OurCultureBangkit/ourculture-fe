import Hero from "@/components/home/hero";
import HeroImage from "@/components/home/hero/heroImage";
import SectionAbout from "@/components/home/about";
import SectionML from "@/components/home/ml";
import MainLayout from "@/layout/MainLayout";
import { Box, Flex, Image, useColorMode, useColorModeValue } from "@chakra-ui/react";
import Head from "next/head";
import SectionStack from "@/components/home/stack";

export default function HomePage() {
  const { colorMode } = useColorMode();
  return (
    <>
      <Head>
        <title>Ourculture</title>
      </Head>

      <MainLayout>
        <Box h={'90vh'} bg={useColorModeValue('white', 'gray.900')}>
          <Box pos={'absolute'} zIndex={0}>
            <Image as="img"
              src="/hero-white.png"
              alt="hero"
              w={'full'}
              h={{ base: '100dvh', md: '70dvh' }}
              objectFit="cover"
              display={colorMode === 'light' ? 'block' : 'none'}
            />
            <Image as="img"
              src="/hero-dark.png"
              alt="hero"
              w={'full'}
              h={{ base: '100dvh', md: '70dvh' }}
              objectFit="cover"
              display={colorMode === 'light' ? 'none' : 'block'}
            />
          </Box>

          <Box pos={'relative'} zIndex={0}>
            <Hero />
            <HeroImage />
          </Box>
        </Box>

        <Box pt={{ sm: '20vh', md: '50vh' }} bg={useColorModeValue('gray.50', 'gray.800')}>
          <SectionML />
          <SectionStack />
        </Box>

        <Flex flexWrap={'wrap'} justify={'center'} w={'full'} pos={'relative'} overflow={'hidden'} minH={'50dvh'}>
          <Box w={'full'} pos={'relative'} zIndex={1}>
            <SectionAbout />
          </Box>
          <Image pos={{ lg: 'absolute' }} zIndex={0}
            src="/mobile/market.png"
            alt="market"
            right={250}
            top={-100}
            marginTop={{ base: -150, md: -100, lg: 0 }}
            w={{ base: 'xs', md: 'md' }}
            transform={'rotate(40deg)'}
          />
        </Flex>

      </MainLayout>
    </>
  )
}