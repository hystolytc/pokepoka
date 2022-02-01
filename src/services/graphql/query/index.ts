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

export const GET_POKEMON_DETAIL = gql`
  query getPokemonDetail($name: String) {
    pokemon: pokemon_v2_pokemon(where: {name: {_eq: $name}}) {
      id
      name
      types: pokemon_v2_pokemontypes {
        type: pokemon_v2_type {
          name
          moves: pokemon_v2_moves(order_by: {name: asc}) {
            name
            accuracy
          }
        }
      }
      stats: pokemon_v2_pokemonstats {
        stat: pokemon_v2_stat {
          name
        }
        base_stat
      }
      abilities: pokemon_v2_pokemonabilities {
        ability: pokemon_v2_ability {
          name
        }
      }
    }
  }
`