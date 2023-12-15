import { Avatar, Button, Stack, Text, useColorModeValue } from "@chakra-ui/react";

interface ProfileCardProps {
  name: string;
  bangkitId: string;
  image: string;
}

export default function ProfileCard({ name, bangkitId, image }: ProfileCardProps) {
  return (
    <Stack align={'center'}>
      <Avatar src={image} name={name} size={'xl'} bg={"#ffc120"} color={'black'} />
      <Stack align={'center'} spacing={0} pt={5} pb={2}>
        <Text
          fontSize={'2xl'}
          fontWeight={'black'}
        >
          {name}
        </Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.500', 'gray.400')}>
          Bangkit Academy 2023
        </Text>
      </Stack>
      <Button size={'xs'} variant={'ghost'} colorScheme="yellow">
        {bangkitId}
      </Button>
    </Stack>
  )
}