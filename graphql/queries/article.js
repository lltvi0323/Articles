import gql from "graphql-tag";

export const getDealsWithFilter = gql`
  query($filter: FilterDealTable) {
    filterDeals: get_deals(filter: $filter) {
      id
      is_hot
    }
  }
`;
