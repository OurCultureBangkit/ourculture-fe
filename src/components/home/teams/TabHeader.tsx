import { Icon, Stack, Tab, TabList, Tabs, Text, useColorModeValue } from "@chakra-ui/react";
import { SiTensorflow, SiAndroid, SiGooglecloud } from "react-icons/si";

interface teamNamesProps {
  icon: any;
  name: string;
}

const teamNames: teamNamesProps[] = [
  { icon: SiGooglecloud, name: 'CC Dev' },
  { icon: SiTensorflow, name: 'ML Dev' },
  { icon: SiAndroid, name: 'Android Dev' },
];

const TabHeader = ({ team }: { team: teamNamesProps }) => {
  return (
    <Stack align={'center'}>
      <Icon as={team.icon} boxSize={10} />
      <Text fontSize={'sm'} fontWeight={'medium'}>
        {team.name}
      </Text>
    </Stack>
  )
}

export default function TabTeams() {
  const hoverColor = useColorModeValue('gray.500', 'gray.400');
  const headerColor = useColorModeValue('gray.400', 'gray.500');

  return (
    <TabList gap={16}>
      {teamNames.map((team, index) => (
        <Tab key={index}
          p={0}
          color={headerColor}
          _selected={{
            color: '#ffc120',
            _hover: { color: '#ffc120' }
          }}
          _hover={{ color: hoverColor }}
        >
          <TabHeader team={team} />
        </Tab>
      ))}
    </TabList>
  )
}