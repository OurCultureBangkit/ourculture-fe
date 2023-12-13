import Navbar from "@/components/navbar";
import { Box, useColorModeValue, Flex } from "@chakra-ui/react";

export default function MainLayout({ children }: { children: React.ReactNode }) {
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

    </Flex>
  )
}