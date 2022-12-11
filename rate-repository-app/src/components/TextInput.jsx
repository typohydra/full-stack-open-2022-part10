import { TextInput as NativeTextInput, StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  input: {
    backgroundColor: theme.colors.primaryWhite,
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    borderStyle: "solid",
    borderColor: theme.colors.primaryGray,
    borderWidth: 1,
  },
  errorOnInput: {
    borderColor: theme.colors.error,
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [styles.input, style, error && styles.errorOnInput];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
