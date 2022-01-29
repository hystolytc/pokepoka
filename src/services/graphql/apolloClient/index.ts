import { ApolloClient, InMemoryCache } from '@apollo/client'
import { offsetLimitPagination } from '@apollo/client/utilities'

const URL = 'https://beta.pokeapi.co/graphql/v1beta'

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        pokemon_v2_pokemon: offsetLimitPagination()
      }
    }
  }
})

export const client = new ApolloClient({
  uri: URL,
  cache
})