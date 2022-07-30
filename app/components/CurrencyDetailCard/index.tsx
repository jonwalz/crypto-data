import { Flex, useColorModeValue, Box, chakra } from '@chakra-ui/react'

export interface CurrencyDetailCardProps {
  name: string
  slug: string
  ticker: string
  priceUsd: number
  longDescription: string
  logoUrl: string
  description: string
}

export function CurrencyDetailCard({
  name,
  longDescription,
  description,
  logoUrl,
}: CurrencyDetailCardProps) {
  return (
    <Flex py="8" px="5">
      <Flex
        bg="green.700"
        shadow="lg"
        rounded="lg"
        overflow="hidden"
        width="100%"
        minHeight="160px"
      >
        <Box
          w={1 / 4}
          bgSize="cover"
          style={{
            backgroundImage: `url(${logoUrl})`,
            backgroundSize: '50%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        ></Box>

        <Box w={3 / 4} p={{ base: 4, md: 4 }}>
          <chakra.h1 fontSize="2xl" fontWeight="bold" color="white">
            {name}
          </chakra.h1>

          <chakra.p mt={2} fontSize="sm" color="gray.300">
            {longDescription}
          </chakra.p>

          <chakra.p mt={2} fontSize="sm" color="gray.300">
            {description}
          </chakra.p>
        </Box>
      </Flex>
    </Flex>
  )
}
