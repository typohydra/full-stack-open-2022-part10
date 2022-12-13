import { gql } from "@apollo/client";

export const SIGNIN = gql`
  mutation Signin($username: String!, $password: String!) {
    authenticate(credentials: { username: $username, password: $password }) {
      accessToken
    }
  }
`;
