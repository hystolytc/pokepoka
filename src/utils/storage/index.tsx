import { IMyPokemon } from 'types/myPokemon'

export const getLocalStorage = {
  myPokemon: (): IMyPokemon => {
    let data = localStorage.getItem('my_pokemon')
    if (data) return JSON.parse(data) 
    return { pokemons: [], pokemonTotal: {} } as IMyPokemon
  }
}

export const setLocalStorage = {
  myPokemon: (data: IMyPokemon) => localStorage.setItem('my_pokemon', JSON.stringify(data)) 
}

export const removeLocalStorage = {
  myPokemon: () => localStorage.removeItem('my_pokemon')
}