import gql from 'graphql-tag';

import * as OtherTypes from './graphql-tag';

export const typeDefs = gql`
  type Review {
    b: String
  }

  ${OtherTypes.typeDefs}
`;
