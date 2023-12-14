import { Button, Container, Flex, Input, Stack, Text, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import { useRef, useState } from "react";
import ModalML from "../modalML";

const ButtonHeader = ({ setData, setLoading, onOpen }: any) => {
  const ref = useRef<any>(null);

  const handleImage = async (e: any) => {
    onOpen();

    const file = e.target.files?.[0];

    const formData = new FormData();
    formData.append("image", file);

    try {
      setLoading(true);
      const response = await axios.post(
        "https://hello-world-ojy22lhfsq-as.a.run.app/ml/vision",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setData(response.data);

    } catch (error) {
      setLoading(false);
      setData(null);

    } finally {
      setLoading(false);
    }
  };

  return (
    <Flex gap={{ base: 0, md: 5 }} align={'center'}>
      <Button
        size={'md'}
        fontSize={'sm'}
        colorScheme="yellow"
        cursor={'pointer'}
        w={'fit-content'}
        px={{ base: 10, md: 7 }}
        py={{ base: 3, md: 6 }}
      >
        Download App
      </Button>

      <Input type="file" display="none" ref={ref} onChange={handleImage} />
      <Button
        variant={'outline'}
        size={'md'}
        fontSize={'sm'}
        colorScheme="yellow"
        cursor={'pointer'}
        w={'fit-content'}
        px={10}
        py={{ base: 3, md: 6 }}
        display={{ base: 'none', md: 'flex' }}
        onClick={() => ref.current?.click()}
      >
        Upload Image
      </Button>
    </Flex>
  )
}

export default function Hero() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState<any>(null);
  const [isLoading, setLoading] = useState(false);

  return (
    <Container maxW={'1600px'}>
      <ModalML isOpen={isOpen} onClose={onClose} data={data} isLoading={isLoading} />
      <Flex
        minH={'50vh'}
        w={'full'}
        justify={'center'}
        align={'center'}
        direction={'column'}
        py={{ base: 10, md: 8 }}
        px={{ base: 3, md: 0 }}
      >
        <Stack
          maxW={'6xl'}
          textAlign={{ md: 'center' }}
          spacing={3}
          align={{ md: 'center' }}
        >
          <Text color={'#FFC120'} fontWeight={'medium'} fontSize={{ md: 'lg' }}>
            Capstone Project - Bangkit Academy 2023
          </Text>
          <Text
            fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }}
            fontWeight={'black'}
          >
            Come Join Us On Our Journey.
            E-Commerce With Powerful Machine Learning.
          </Text>
          <Text
            color={useColorModeValue('gray.500', 'gray.400')}
            fontSize={{ base: 'md', md: 'xl' }}
            maxW={'4xl'}
            mx={'auto'}
            textTransform={'capitalize'}
            lineHeight={'1.8'}
          >
            When else can you use e-commerce with
            <Text as="span" color={'#ffc120'}> machine learning </Text>
            to search for data based on the
            <Text as="span" color={'#ffc120'}> given image. </Text>
            upload your image now and see the results.
          </Text>

          <ButtonHeader setData={setData} setLoading={setLoading} onOpen={onOpen} />

        </Stack>
      </Flex>
    </Container>
  )
}