import { Button, Container, Flex, Icon, Image, Modal, ModalContent, ModalOverlay, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { BsChevronLeft } from "react-icons/bs";

interface modalMlProps {
  isOpen: boolean;
  onClose: () => void;
  data: any;
  isLoading: boolean;
}

export default function ModalML({ isOpen, onClose, data, isLoading }: modalMlProps) {
  const bgModal = useColorModeValue('white', 'gray.900');

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={'full'}>
      <ModalOverlay>
        <ModalContent as={Flex}
          justify={'center'}
          align={'center'}
          bg={bgModal}
        >
          {isLoading ? (
            'Loading Predicted Image...'
          ) : (
            <Container maxW={'3xl'}>
              <Stack py={5} spacing={5}>
                <Button
                  variant={'unstyled'}
                  w={'fit-content'}
                  display={'flex'}
                  alignItems={'center'}
                  gap={3}
                  _hover={{
                    color: '#ffc120'
                  }}
                  onClick={onClose}
                >
                  <Icon as={BsChevronLeft} />
                  Back
                </Button>

                <Flex
                  justify={'center'}
                  mx={'auto'}
                  w={{ base: 'xs', md: 'md' }}
                  maxW={{ base: 'xs', md: 'md' }}
                >
                  <Image
                    src={data?.data.image}
                    alt={data?.data.name}
                    objectFit={'cover'}
                  />
                </Flex>

                <Stack pt={8}>
                  <Text fontSize={'3xl'} fontWeight={'black'}>
                    {data?.data.name}
                  </Text>

                  <Text lineHeight={'1.8'}>
                    {data?.data.description}
                  </Text>
                </Stack>

                {data?.data.source && (
                  <Stack spacing={1} py={5}>
                    <Text fontSize={'lg'} fontWeight={'bold'}>
                      Source
                    </Text>
                    <Text fontSize={'sm'}>
                      {data?.data.source}
                    </Text>
                  </Stack>
                )}

              </Stack>
            </Container>
          )}
        </ModalContent>
      </ModalOverlay>
    </Modal>
  )
}