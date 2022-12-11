import { TextInput as NativeTextInput, StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  input: {
    backgroundColor: theme.colors.primaryWhite,
    padding: 15,
    margin: 10,
    borderRadius: 5,
    borderStyle: "solid",
    borderColor: theme.colors.primaryGray,
    borderWidth: 1,
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [styles.input, style];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
