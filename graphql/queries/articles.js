import gql from "graphql-tag";

export const getArticles = gql `
    query {
        get_articles {
            id,
            url,
            content,
            created_at
        }
    }
`;
