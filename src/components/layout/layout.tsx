import { Header } from "@/components/navigation/header";
import { Box } from "@chakra-ui/react";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Box pt={'3.875rem'}>{children}</Box>
    </>
  );
};
