/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGithubPR = /* GraphQL */ `
  query GetGithubPR($id: ID!) {
    getGithubPR(id: $id) {
      id
      url
      title
      state
      repoName
      createdAt
      updatedAt
    }
  }
`;
export const listGithubPRS = /* GraphQL */ `
  query ListGithubPRS(
    $filter: ModelGithubPRFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGithubPRS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        url
        title
        state
        repoName
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
