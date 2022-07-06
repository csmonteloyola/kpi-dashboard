/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGithubPR = /* GraphQL */ `
  mutation CreateGithubPR(
    $input: CreateGithubPRInput!
    $condition: ModelGithubPRConditionInput
  ) {
    createGithubPR(input: $input, condition: $condition) {
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
export const updateGithubPR = /* GraphQL */ `
  mutation UpdateGithubPR(
    $input: UpdateGithubPRInput!
    $condition: ModelGithubPRConditionInput
  ) {
    updateGithubPR(input: $input, condition: $condition) {
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
export const deleteGithubPR = /* GraphQL */ `
  mutation DeleteGithubPR(
    $input: DeleteGithubPRInput!
    $condition: ModelGithubPRConditionInput
  ) {
    deleteGithubPR(input: $input, condition: $condition) {
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
