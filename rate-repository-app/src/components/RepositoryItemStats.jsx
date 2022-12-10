import React from "react";
import { View, StyleSheet } from "react-native";
import Text from "./Text";

const styles = StyleSheet.create({
  flexContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  statContainer: {
    textAlign: "center",
    padding: 5,
  },
  textCentered: {
    textAlign: "center",
  },
});

const RepositoryItemStats = ({
  stargazersCount,
  forksCount,
  reviewCount,
  ratingAverage,
}) => {
  const numberToShortForm = (number) => {
    if (number >= 1000) {
      let shortenedNumber = Math.round((number / 1000) * 10) / 10;
      return shortenedNumber.toString() + "k";
    }
    return number;
  };

  return (
    <View style={styles.flexContainer}>
      <View style={styles.statContainer}>
        <Text style={styles.textCentered} fontWeight="bold">
          {numberToShortForm(stargazersCount)}
        </Text>
        <Text style={styles.textCentered} color="textGray">
          Stars
        </Text>
      </View>
      <View style={styles.statContainer}>
        <Text style={styles.textCentered} fontWeight="bold">
          {numberToShortForm(forksCount)}
        </Text>
        <Text style={styles.textCentered} color="textGray">
          Forks
        </Text>
      </View>
      <View style={styles.statContainer}>
        <Text style={styles.textCentered} fontWeight="bold">
          {numberToShortForm(reviewCount)}
        </Text>
        <Text style={styles.textCentered} color="textGray">
          Reviews
        </Text>
      </View>
      <View style={styles.statContainer}>
        <Text style={styles.textCentered} fontWeight="bold">
          {numberToShortForm(ratingAverage)}
        </Text>
        <Text style={styles.textCentered} color="textGray">
          Rating
        </Text>
      </View>
    </View>
  );
};

export default RepositoryItemStats;
