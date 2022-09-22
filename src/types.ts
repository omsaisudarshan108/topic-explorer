export interface Stargazer {
  totalCount: number;
  __typename: String;
}

export interface RelatedTopic {
  id: String | null;
  name: String;
  stargazers: Stargazer;
}

export interface Topics {
  id: String;
  __typename: String;
  name: String;
  relatedTopics: RelatedTopic[];
  stargazers: Stargazer;
}
