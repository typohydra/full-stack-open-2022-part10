import { StyleSheet, View } from "react-native";
import { Route, Routes, Navigate } from 'react-router-native';

import theme from "../theme";
import AppBar from "./AppBar";
import RepositoryList from "./RepositoryList";
import { RepositoryView } from "./RepositoryView";
import SignIn from "./SignIn";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.primaryGray,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="/signin" element={<SignIn />} exact />
        <Route path="/:id" element={<RepositoryView />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;