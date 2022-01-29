export interface IPokemon {
  pokemonId: number
  name: string
  givenName: string
}

export interface IMyPokemonTotal {
  [key: string]: number
}

export interface IMyPokemon {
  pokemons: IPokemon[]
  pokemonTotal: IMyPokemonTotal
}