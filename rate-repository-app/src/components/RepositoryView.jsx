import { View } from "react-native";
import { useParams } from "react-router-native";

import useRepository from "../hooks/useRepository";
import RepositoryItem from "./RepositoryItem";
import Text from "./Text";

export const RepositoryView = () => {
  let { id } = useParams();
  id = id.slice(1);

  const { repository, loading } = useRepository(id);

  if (loading) return <Text>Loading...</Text>;

  return (
    <View>
      <RepositoryItem repository={repository} singleRepoView={true} />
    </View>
  );
};
