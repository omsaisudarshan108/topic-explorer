import { gql } from "@apollo/client";

export default gql`
  query getRTopics {
    react: topic(name: "react") {
      relatedTopics {
        id
        name
        stargazers {
          totalCount
        }
        relatedTopics {
          id
          name
          stargazers {
            totalCount
          }
        }
      }
    }
  }
`;
