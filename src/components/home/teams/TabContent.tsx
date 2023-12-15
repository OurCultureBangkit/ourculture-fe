import ProfileCard from "@/components/profile";
import { Box, Container, Flex, Stack, TabPanel, TabPanels, Text, useColorModeValue } from "@chakra-ui/react";

const PanelWrapper = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <TabPanel>
    <Stack spacing={8}>
      <Text
        fontSize={'2xl'}
        fontWeight={'black'}
        color={useColorModeValue('gray.500', 'gray.400')}
      >
        {title}
      </Text>
      <Flex
        w={'full'}
        flexWrap={'wrap'}
        gap={5}
        justify={{ base: 'center', lg: 'start' }}
      >
        {children}
      </Flex>
    </Stack>
  </TabPanel>
)

const CloudComputingPanel = () => {
  const datas = [
    { id: 1, name: "Gung Krisna", bangkitId: "C014BSY3756", image: "null" },
    { id: 2, name: "Misransyah", bangkitId: "C463BSY4349", image: "null" }
  ];

  const bgCard = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.800');

  return (
    <>
      {datas.map((data, index) => (
        <Box key={index}
          w={{ base: 'full', md: 'sm' }}
          maxW={{ base: 'full', md: 'sm' }}
          bg={bgCard}
          p={8}
          rounded={'xl'}
          shadow={'inset 0 1px 0 0 #ffffff0d'}
          border={'1px'}
          borderColor={borderColor}
        >
          <ProfileCard image={data.image} name={data.name} bangkitId={data.bangkitId} />
        </Box>
      ))}
    </>
  )
}

const MLPanel = () => {
  const datas = [
    { id: 1, name: "Teguh Pramana", bangkitId: "M014BSY0894", image: "null" },
    { id: 2, name: "Zulfan Syahidan", bangkitId: "M313BSY1544", image: "null" },
    { id: 3, name: "Tegar Arif", bangkitId: "M008BSY0961", image: "null" }
  ];

  const bgCard = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.800');

  return (
    <>
      {datas.map((data, index) => (
        <Box key={index}
          w={{ base: 'full', md: 'sm' }}
          maxW={{ base: 'full', md: 'sm' }}
          bg={bgCard}
          p={8}
          rounded={'xl'}
          shadow={'inset 0 1px 0 0 #ffffff0d'}
          border={'1px'}
          borderColor={borderColor}
        >
          <ProfileCard image={data.image} name={data.name} bangkitId={data.bangkitId} />
        </Box>
      ))}
    </>
  )
}

const AndroidPanel = () => {
  const datas = [
    { id: 1, name: "Reyvi Rahman", bangkitId: "A226BSY2640", image: "null" },
    { id: 2, name: "Agung Prema", bangkitId: "A113BSY2353", image: "null" }
  ];

  const bgCard = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.800');

  return (
    <>
      {datas.map((data, index) => (
        <Box key={index}
          w={{ base: 'full', md: 'sm' }}
          maxW={{ base: 'full', md: 'sm' }}
          bg={bgCard}
          p={8}
          rounded={'xl'}
          shadow={'inset 0 1px 0 0 #ffffff0d'}
          border={'1px'}
          borderColor={borderColor}
        >
          <ProfileCard image={data.image} name={data.name} bangkitId={data.bangkitId} />
        </Box>
      ))}
    </>
  )
}

export default function TabContent() {
  return (
    <Container maxW={'7xl'} py={20} px={{ base: 3, md: 0 }}>
      <TabPanels>
        <PanelWrapper title="Cloud Computing Engineer">
          <CloudComputingPanel />
        </PanelWrapper>
        <PanelWrapper title="Machine Learning Engineer">
          <MLPanel />
        </PanelWrapper>
        <PanelWrapper title="Android Developer">
          <AndroidPanel />
        </PanelWrapper>
      </TabPanels>
    </Container>
  )
}