import { Image } from "@chakra-ui/react";

export default function HeroImage() {
  return (
    <Image src="/mobile/home.png" alt="hero image"
      mt={{ base: 0, md: -4 }}
      w={'4xl'}
      mx={'auto'}
      px={{ base: 3, md: 0 }}
    />
  )
}