import { SIGNIN } from "../graphql/mutations";
import { useMutation } from "@apollo/client";

const useSignIn = () => {
  const [mutate, result] = useMutation(SIGNIN);

  const signIn = async ({ username, password }) => {
    const signin = await mutate({ variables: { username, password } });
    return signin;
  };

  return [signIn, result];
};

export default useSignIn;
