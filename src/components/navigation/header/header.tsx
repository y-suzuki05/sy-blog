import { Box, Flex } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Box as={"header"} h={"3.875rem"} bg={"white"} position={'fixed'} w={'100%'} zIndex={'sticky'}>
      <Flex
        justifyContent={"space-between"}
        color={{ base: "blue", md: "red" }}
        w={{ base: "100%", md: "70rem" }}
        m={"auto"}
        h={'100%'}
      >
        テストブログ
      </Flex>
    </Box>
  );
};
