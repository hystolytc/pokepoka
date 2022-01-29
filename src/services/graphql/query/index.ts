import { gql } from '@apollo/client'

export const GET_POKEMON = gql`
  query getPokemon($limit: Int, $offset: Int) {
    pokemons: pokemon_v2_pokemon(limit: $limit, offset: $offset) {
      id
      name
    }
    aggregate: pokemon_v2_pokemon_aggregate {
      aggregate {
        count
      }
    }
  }
`