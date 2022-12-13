import { View, StyleSheet, ScrollView, Pressable } from "react-native";
import Constants from "expo-constants";
import AppBarTab from "./AppBarTab";
import theme from "../theme";
import { Link } from "react-router-native";

import useSignOut from "../hooks/useSignOut";
import { useQuery } from "@apollo/client";
import { ME } from "../graphql/queries";

const styles = StyleSheet.create({
  container: {
    padding: 15,
    paddingTop: Constants.statusBarHeight * 1.5,
    paddingBottom: Constants.statusBarHeight / 2,
    backgroundColor: theme.colors.appBarBackground,
  },
  scrollView: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
});

const AppBar = () => {
  const [signOut] = useSignOut();
  const { data } = useQuery(ME);

  return (
    <View style={styles.container}>
      <ScrollView horizontal styles={styles.scrollView}>
        <Link to="/">
          <AppBarTab>Repositories</AppBarTab>
        </Link>
        {data?.me ? (
          <Link to="/signin">
            <Pressable onPress={() => signOut()}>
              <AppBarTab>Sign out</AppBarTab>
            </Pressable>
          </Link>
        ) : (
          <Link to="/signin">
            <AppBarTab>Sign in</AppBarTab>
          </Link>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
