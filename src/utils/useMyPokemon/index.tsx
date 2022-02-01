import { useState } from 'react'
import produce from 'immer'
import { IMyPokemon, IPokemon } from 'types/myPokemon'
import { getLocalStorage, setLocalStorage, removeLocalStorage } from 'utils'

export const useMyPokemon = () => {
  const [myPokemon, setMyPokemon] = useState<IMyPokemon>({ pokemons: [], pokemonTotal: {} })

  const initializePokemon = () => {
    const data = getLocalStorage.myPokemon()
    if (!data) return
    setMyPokemon(data)
  }

  const addPokemon = (pokemon: IPokemon) => {
    const nextState = produce(myPokemon, draft => {
      const pokemonId = pokemon.pokemonId+''
      draft.pokemons.push(pokemon)
      if (draft.pokemonTotal[pokemonId]) {
        draft.pokemonTotal[pokemonId]++
      } else {
        draft.pokemonTotal[pokemonId] = 1
      }
    })
    setMyPokemon(nextState)
    setLocalStorage.myPokemon(nextState)
  }

  const removePokemon = (givenName: string) => {
    let pokemonId = ''
    const nextState = produce(myPokemon, draft => {
      draft.pokemons = draft.pokemons.filter(v => {
        if (v.givenName === givenName) {
          pokemonId = v.pokemonId+''
          return false
        }
        return true
      })
      draft.pokemonTotal[pokemonId]--
    })
    setMyPokemon(nextState)
    if (!nextState.pokemons.length) return removeLocalStorage.myPokemon()
    setLocalStorage.myPokemon(nextState)
  }

  return { myPokemon, initializePokemon, addPokemon, removePokemon }
}