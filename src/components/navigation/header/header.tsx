import { Box, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";

export const Header = () => {
  return (
    <Box
      as={"header"}
      h={"3.875rem"}
      bg={"white"}
      position={"fixed"}
      w={"100%"}
    >
      <Flex
        justifyContent={"space-between"}
        color={{ base: "blue", md: "red" }}
        w={{ base: "100%", md: "70rem" }}
        m={"auto"}
        h={"100%"}
        alignItems={"center"}
      >
        <Heading as={"h1"} color={"#3ea8ff"}>
          <Link href={"/"}>テストブログ</Link>
        </Heading>
      </Flex>
    </Box>
  );
};
