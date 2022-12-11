import React from "react";
import Text from "./Text";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
});

const AppBarTab = ({ children }) => {
  return (
    <Text style={styles.container} fontWeight="bold" color="textWhite">
      {children}
    </Text>
  );
};

export default AppBarTab;
