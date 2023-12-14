import Hero from "@/components/home/hero";
import HeroImage from "@/components/home/hero/heroImage";
import SectionML from "@/components/home/sectionML";
import MainLayout from "@/layout/MainLayout";
import { Box, Image, useColorMode, useColorModeValue } from "@chakra-ui/react";
import Head from "next/head";

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

        <Box pt={{ sm: '20vh', md: '50vh' }} bg={useColorModeValue('gray.100', 'gray.800')}>
          <SectionML />
        </Box>
      </MainLayout>
    </>
  )
}