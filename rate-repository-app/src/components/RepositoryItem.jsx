import { View, Image, StyleSheet } from "react-native";
import theme from "../theme";
import RepositoryItemInfo from "./RepositoryItemInfo";
import RepositoryItemStats from "./RepositoryItemStats";

const styles = StyleSheet.create({
  flexContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  repoContainer: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: theme.colors.primaryWhite,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
});

const RepositoryItem = ({ repository }) => {
  return (
    <View testID="repositoryItem" style={styles.repoContainer}>
      <View style={styles.flexContainer}>
        <Image
          source={{ uri: `${repository.ownerAvatarUrl}` }}
          style={styles.image}
        />
        <RepositoryItemInfo
          fullName={repository.fullName}
          description={repository.description}
          language={repository.language}
        />
      </View>
      <RepositoryItemStats
        stargazersCount={repository.stargazersCount}
        forksCount={repository.forksCount}
        reviewCount={repository.reviewCount}
        ratingAverage={repository.ratingAverage}
      />
    </View>
  );
};

export default RepositoryItem;
