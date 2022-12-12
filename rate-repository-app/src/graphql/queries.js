import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          description
          fullName
          forksCount
          language
          stargazersCount
          reviewCount
          ratingAverage
          ownerAvatarUrl
          id
        }
      }
    }
  }
`;
