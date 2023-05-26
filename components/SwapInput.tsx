import { Box, Button, HStack, Image, Input } from "@chakra-ui/react";
import { resolveIpfsUri } from "@thirdweb-dev/react";
import React from "react";

type Props = {
  type: "native" | "token";
  tokenImage?: string;
  current: string;
  setValue: (value: string) => void;
  max?: string;
  value: string;
};

export default function SwapInput({
  type,
  tokenImage,
  setValue,
  value,
  current,
  max,
}: Props) {
  return (
    <HStack w="full" bgColor="gray.100" rounded="2xl" px="5">
      <Image src={tokenImage || "/token.png"} w="7" h="7" />
      <Input
        type="number"
        placeholder="0.0"
        fontSize="3xl"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        outline="none"
        py="10"
        isDisabled={current !== type}
        border="none"
        fontFamily="monospace"
        _focus={{ boxShadow: "none" }}
      />
      {current === type && (
        <Button onClick={() => setValue(max || "0")}>Max</Button>
      )}
    </HStack>
  );
}
