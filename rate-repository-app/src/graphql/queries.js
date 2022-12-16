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

export const ME = gql`
  query Me {
    me {
      id
      username
    }
  }
`;

export const GET_REPOSITORY = gql`
  query Repository($repositoryId: ID!) {
    repository(id: $repositoryId) {
      description
      fullName
      forksCount
      language
      stargazersCount
      reviewCount
      ratingAverage
      ownerAvatarUrl
      id
      url
    }
  }
`;
