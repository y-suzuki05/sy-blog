import { extendTheme } from "@chakra-ui/react";
import { customColors } from "@/theme/colors";
import { customStyles } from "@/theme/styles";

export const customTheme = extendTheme({
  fonts: {
    body: `'メイリオ', sans-serif`
  },
  styles: customStyles,
  colors: customColors
})