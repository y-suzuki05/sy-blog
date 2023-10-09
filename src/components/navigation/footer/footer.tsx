import { Flex, Text } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Flex
      as={"footer"}
      h={"3.875rem"}
      bg={"white"}
      position={"fixed"}
      left={0}
      bottom={0}
      w={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Text>Copyright - Yuki Suzuki, 2023 All Rights Reserved.</Text>
    </Flex>
  );
};
