import React, { useEffect } from 'react';
import { ApolloProvider } from '@apollo/client';
import PokemonList from 'containers/Home';
import { useMyPokemon } from 'utils'
import { IMyPokemon } from 'types/myPokemon'
import { client } from 'services/graphql/apolloClient'

export const PokemonContext = React.createContext({
  myPokemon: {} as IMyPokemon,
  addPokemon: (v: any) => {},
  removePokemon: (v: any) => {}
})

function App() {
  const { myPokemon, initializePokemon, addPokemon, removePokemon } = useMyPokemon()

  useEffect(() => {
    initializePokemon()
  }, [])

  return (
    <ApolloProvider client={client}>
      <PokemonContext.Provider value={{ myPokemon, addPokemon, removePokemon }}>
        <PokemonList />
      </PokemonContext.Provider>
    </ApolloProvider>
  );
}

export default App;