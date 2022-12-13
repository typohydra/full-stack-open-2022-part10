import { SIGNIN } from "../graphql/mutations";
import { useMutation, useApolloClient } from "@apollo/client";

import useAuthStorage from "../hooks/useAuthStorage";

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const [mutate, result] = useMutation(SIGNIN);

  const signIn = async ({ username, password }) => {
    const signin = await mutate({ variables: { username, password } });

    await authStorage.setAccessToken(signin.data.authenticate.accessToken);
    apolloClient.resetStore();

    return signin;
  };

  return [signIn, result];
};

export default useSignIn;
