import { Box, Flex } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Box as={"header"} h={'3.875rem'}>
      <Flex justifyContent={"space-between"}>テストブログ</Flex>
    </Box>
  );
};
