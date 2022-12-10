import React from "react";
import Text from "./Text";
import { Pressable } from "react-native";

const AppBarTab = ({ children }) => {
  return (
    <Pressable onPress={() => console.log("pressed")}>
      <Text fontWeight="bold" color="textWhite">
        {children}
      </Text>
    </Pressable>
  );
};

export default AppBarTab;
