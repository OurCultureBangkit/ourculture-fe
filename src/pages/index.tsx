import Hero from "@/components/home/hero";
import HeroImage from "@/components/home/heroImage";
import MainLayout from "@/layout/MainLayout";
import { Box, useColorModeValue } from "@chakra-ui/react";
import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Ourculture</title>
      </Head>

      <MainLayout>
        <Box h={'90vh'} bg={useColorModeValue('white', 'gray.900')}>
          <Hero />
          <HeroImage />
        </Box>

        <Box pt={{ md: '50vh' }} bg={useColorModeValue('gray.100', 'gray.800')}>

        </Box>
      </MainLayout>
    </>
  )
}