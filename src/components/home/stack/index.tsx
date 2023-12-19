import { Box, Container, Flex, Image, Stack, Text, useColorModeValue } from "@chakra-ui/react";

const stacks = [
  {
    id: 1,
    name: 'Typescript',
    image: 'typescript.png',
    hasbg: true,
    category: 'Frontend Web Development',
    description: 'TypeScript is a superset of JavaScript that compiles to clean JavaScript output.'
  },
  {
    id: 3,
    name: 'Chakra UI',
    image: 'chakra.png',
    hasbg: true,
    category: 'Frontend Web Development',
    description: 'Chakra UI is a modular, accessible component library for building React applications.'
  },
  {
    id: 4,
    name: "ExpressJS",
    image: "express.png",
    hasbg: false,
    category: 'Backend Development',
    description: "Express.js is a back-end web application framework for Node.js, known for its simplicity and flexibility."
  },
  {
    id: 5,
    name: 'Next.js',
    image: 'next.png',
    hasbg: false,
    category: 'Frontend Web Development',
    description: 'Next.js is a React-based framework that enables server-side rendering and generates static websites.'
  },
  {
    id: 6,
    name: 'Python',
    image: 'python.png',
    hasbg: true,
    category: 'Machine Learning Development',
    description: 'Python is an interpreted, high-level and general-purpose programming language.'
  },
  {
    id: 7,
    name: 'Flask',
    image: 'flask.png',
    hasbg: false,
    category: 'API ML Development',
    description: 'Flask is a micro web framework written in Python. It is classified as a microframework because it does not require particular tools or libraries.'
  },
  {
    id: 8,
    name: 'Kotlin',
    image: 'kotlin.png',
    hasbg: true,
    category: 'Android Development',
    description: 'Kotlin is a cross-platform, statically typed, general-purpose programming language with type inference.'
  },
  {
    id: 9,
    name: 'Tensorflow',
    image: 'tensorflow.png',
    hasbg: true,
    category: 'Machine Learning Development',
    description: 'TensorFlow is a free and open-source software library for machine learning.'
  }
];

export default function SectionStack() {
  const bgImgStack = useColorModeValue('white', 'gray.200');
  const bgStack = useColorModeValue('white', 'gray.700');
  const borderStackColor = useColorModeValue('gray.200', 'gray.700');
  const textSecondaryColor = useColorModeValue('gray.500', 'gray.300');
  const titleSecondary = useColorModeValue('gray.500', 'gray.400');

  return (
    <Container maxW={'7xl'} py={14}>
      <Flex px={{ base: 3, md: 0 }} flexWrap={'wrap'} gap={5} justify={'center'}>
        {stacks.map((stack, index) => (
          <Stack key={index}
            w={{ base: 'full', md: '300px', lg: '310px' }}
            spacing={4}
            bg={bgStack}
            rounded={'lg'}
            shadow={'inset 0 1px 0 0 #ffffff0d'}
            border={'1px'}
            p={5}
            borderColor={borderStackColor}
          >
            <Flex gap={3} align={'center'}>
              <Flex
                w={10} h={10}
                align={'center'}
                bg={!stack.hasbg ? bgImgStack : 'transparent'}
                rounded={'lg'}
              >
                <Image
                  src={`/stack/${stack.image}`}
                  alt={stack.name}
                  w={10}
                />
              </Flex>
              <Stack spacing={1}>
                <Text fontWeight={'medium'}>
                  {stack.name}
                </Text>
                <Text fontSize={'xs'}
                  color={titleSecondary}
                >
                  {stack.category}
                </Text>
              </Stack>
            </Flex>
            <Text
              fontSize={'sm'}
              color={textSecondaryColor}
              lineHeight={1.7}
            >
              {stack.description}
            </Text>
          </Stack>
        ))}
      </Flex>
    </Container>
  )
}