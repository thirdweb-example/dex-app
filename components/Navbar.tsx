import { Box, Flex, Text } from "@chakra-ui/react";
import { ConnectWallet } from "@thirdweb-dev/react";
import React from "react";

export default function Navbar() {
  return (
    <Box w="full" borderBottomWidth="1px" borderColor="gray.100">
      <Flex
        maxW="6xl"
        w="full"
        mx="auto"
        justifyContent="space-between"
        alignItems="center"
        py="5"
        px={{ base: "5", xl: "0" }}
      >
        <Text fontWeight="bold" fontSize="2xl">
          Token DEX
        </Text>
        <ConnectWallet theme="light" />
      </Flex>
    </Box>
  );
}
