interface IPokemonMove {
  name: string
  accuracy: number
}

export interface ITypeMoves {
  type: string
  moves: IPokemonMove[]
}

interface IStat {
  stat: {
    name: string
  },
  base_stat: number
}

interface IAbility {
  ability: {
    name: string
  }
}

export interface IPokemon {
  id: number
  name: string
  types: string[]
  typeMoves: ITypeMoves[]
  stats: IStat[]
  abilities: IAbility[]
}