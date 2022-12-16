import { View, Image, StyleSheet, Pressable, Linking } from "react-native";
import theme from "../theme";
import RepositoryItemInfo from "./RepositoryItemInfo";
import RepositoryItemStats from "./RepositoryItemStats";
import Text from "./Text";

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
  githubButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    padding: 20,
    marginTop: 10,
    alignItems: "center",
  },
});

const RepositoryItem = ({ repository, singleRepoView = false }) => {
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
      {singleRepoView && (
        <Pressable
          onPress={() => Linking.openURL(repository.url)}
          style={styles.githubButton}
        >
          <Text color="textWhite" fontWeight="bold">
            Open In GitHub
          </Text>
        </Pressable>
      )}
    </View>
  );
};

export default RepositoryItem;
