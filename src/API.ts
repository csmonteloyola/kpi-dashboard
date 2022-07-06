/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateGithubPRInput = {
  id?: string | null,
  url: string,
  title: string,
  state: string,
  repoName: string,
};

export type ModelGithubPRConditionInput = {
  url?: ModelStringInput | null,
  title?: ModelStringInput | null,
  state?: ModelStringInput | null,
  repoName?: ModelStringInput | null,
  and?: Array< ModelGithubPRConditionInput | null > | null,
  or?: Array< ModelGithubPRConditionInput | null > | null,
  not?: ModelGithubPRConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type GithubPR = {
  __typename: "GithubPR",
  id: string,
  url: string,
  title: string,
  state: string,
  repoName: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateGithubPRInput = {
  id: string,
  url?: string | null,
  title?: string | null,
  state?: string | null,
  repoName?: string | null,
};

export type DeleteGithubPRInput = {
  id: string,
};

export type ModelGithubPRFilterInput = {
  id?: ModelIDInput | null,
  url?: ModelStringInput | null,
  title?: ModelStringInput | null,
  state?: ModelStringInput | null,
  repoName?: ModelStringInput | null,
  and?: Array< ModelGithubPRFilterInput | null > | null,
  or?: Array< ModelGithubPRFilterInput | null > | null,
  not?: ModelGithubPRFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelGithubPRConnection = {
  __typename: "ModelGithubPRConnection",
  items:  Array<GithubPR | null >,
  nextToken?: string | null,
};

export type CreateGithubPRMutationVariables = {
  input: CreateGithubPRInput,
  condition?: ModelGithubPRConditionInput | null,
};

export type CreateGithubPRMutation = {
  createGithubPR?:  {
    __typename: "GithubPR",
    id: string,
    url: string,
    title: string,
    state: string,
    repoName: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateGithubPRMutationVariables = {
  input: UpdateGithubPRInput,
  condition?: ModelGithubPRConditionInput | null,
};

export type UpdateGithubPRMutation = {
  updateGithubPR?:  {
    __typename: "GithubPR",
    id: string,
    url: string,
    title: string,
    state: string,
    repoName: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteGithubPRMutationVariables = {
  input: DeleteGithubPRInput,
  condition?: ModelGithubPRConditionInput | null,
};

export type DeleteGithubPRMutation = {
  deleteGithubPR?:  {
    __typename: "GithubPR",
    id: string,
    url: string,
    title: string,
    state: string,
    repoName: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetGithubPRQueryVariables = {
  id: string,
};

export type GetGithubPRQuery = {
  getGithubPR?:  {
    __typename: "GithubPR",
    id: string,
    url: string,
    title: string,
    state: string,
    repoName: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListGithubPRSQueryVariables = {
  filter?: ModelGithubPRFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGithubPRSQuery = {
  listGithubPRS?:  {
    __typename: "ModelGithubPRConnection",
    items:  Array< {
      __typename: "GithubPR",
      id: string,
      url: string,
      title: string,
      state: string,
      repoName: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateGithubPRSubscription = {
  onCreateGithubPR?:  {
    __typename: "GithubPR",
    id: string,
    url: string,
    title: string,
    state: string,
    repoName: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGithubPRSubscription = {
  onUpdateGithubPR?:  {
    __typename: "GithubPR",
    id: string,
    url: string,
    title: string,
    state: string,
    repoName: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGithubPRSubscription = {
  onDeleteGithubPR?:  {
    __typename: "GithubPR",
    id: string,
    url: string,
    title: string,
    state: string,
    repoName: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
