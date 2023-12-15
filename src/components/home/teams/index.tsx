import { Box, Container, Icon, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { FaUsers } from "react-icons/fa";
import TabTeams from "./TabHeader";

export default function SectionTeams() {
  return (
    <Container maxW={'7xl'} py={24}>
      <Stack maxW={'3xl'} px={{ base: 3, md: 0 }}>
        <Icon as={FaUsers} boxSize={14} color={useColorModeValue('gray.400', 'gray.300')} />
        <Text color={'#ffc120'}>
          Capstone Teams
        </Text>
        <Text
          fontSize={{ base: '2xl', md: '4xl' }}
          fontWeight={'black'}
        >
          Meet the teams behind Ourculture.
        </Text>
        <Text
          fontSize={{ base: 'sm', md: 'md' }}
          color={useColorModeValue('gray.500', 'gray.400')}
          fontWeight={'medium'}
          pb={5}
        >
          The teams behind Ourculture are made up of Bangkit Academy students from various backgrounds and majors.
          There are Cloud Computing, Machine Learning, and Android Development teams.
          Check this card to see the teams behind Ourculture.
        </Text>
        <Box pt={12}>
          <TabTeams />
        </Box>
      </Stack>
    </Container>
  )
}