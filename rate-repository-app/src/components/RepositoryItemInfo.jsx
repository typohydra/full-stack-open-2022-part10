import React from "react";
import { StyleSheet, View } from "react-native";
import theme from "../theme";
import Text from "./Text";

const styles = StyleSheet.create({
  infoContainer: {
    display: "flex",
    alignItems: "flex-start",
    paddingLeft: 20,
  },
  descriptionContainer: {
    paddingVertical: 10,
    marginRight: 15,
  },
  languageContainer: {
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 5,
  },
  repoContainer: {
    padding: 10,
  },
});

const RepositoryItemInfo = ({ fullName, description, language }) => {
  return (
    <View style={styles.infoContainer}>
      <Text fontWeight="bold" fontSize="subheading">
        {fullName}
      </Text>
      <View style={styles.descriptionContainer}>
        <Text color="textGray">{description}</Text>
      </View>
      <View style={styles.languageContainer}>
        <Text color="textWhite">{language}</Text>
      </View>
    </View>
  );
};

export default RepositoryItemInfo;
