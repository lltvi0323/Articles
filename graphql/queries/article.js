import gql from "graphql-tag";

export const getArticles = gql`
  query {
    articles: get_articles {
      id
      title
      url
      content
      created_at
    }
  }
`;
