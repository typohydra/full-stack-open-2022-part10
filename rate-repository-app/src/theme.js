import { Platform } from "react-native";

const theme = {
  colors: {
    textPrimary: "#24292e",
    textSecondary: "#586069",
    textWhite: "#FFFFFF",
    textGray: "#808080",
    primary: "#0366d6",
    primaryWhite: "#FFFFFF",
    primaryGray: "#e1e4e8",
    appBarBackground: "#24292e",
    error: "#d73a4a",
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      android: "Roboto",
      ios: "Arial",
      default: "System",
    }),
  },
  fontWeights: {
    normal: "400",
    bold: "700",
  },
};

export default theme;
