import { Header } from "@/components/navigation/header";
import { Box } from "@chakra-ui/react";
import { Footer } from "@/components/navigation/footer";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Box
        pt={"3.875rem"}
        w={{ base: "100%", md: "70rem" }}
        m={"auto"}
        h={"100%"}
      >
        {children}
      </Box>
      <Footer />
    </>
  );
};
