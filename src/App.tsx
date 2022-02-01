import React, { useEffect } from 'react';
import { ApolloProvider } from '@apollo/client';
import { Routes, Route } from 'react-router-dom'
import Home from 'containers/Home';
import Detail from 'containers/Detail';
import MyPokemon from 'containers/MyPokemon'
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
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:name' element={<Detail />} />
          <Route path='/my-pokemon' element={<MyPokemon />} />
        </Routes>
      </PokemonContext.Provider>
    </ApolloProvider>
  );
}

export default App;