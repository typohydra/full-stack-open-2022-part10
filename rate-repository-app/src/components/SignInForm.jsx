import React from "react";
import { View, Pressable, StyleSheet } from "react-native";
import theme from "../theme";
import FormikTextInput from "./FormikTextInput";
import Text from "./Text";

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: theme.colors.primaryWhite,
    padding: 20,
  },
  submitButtom: {
    backgroundColor: theme.colors.primary,
    padding: 20,
    alignItems: "center",
    borderRadius: 5,
    marginVertical: 10,
  },
});

export const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.formContainer}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput
        secureTextEntry={true}
        name="password"
        placeholder="Password"
      />
      <Pressable style={styles.submitButtom} onPress={onSubmit}>
        <Text color="textWhite" fontWeight="bold">
          Sign in
        </Text>
      </Pressable>
    </View>
  );
};
