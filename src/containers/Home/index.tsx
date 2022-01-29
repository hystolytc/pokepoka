import React, { useContext } from 'react';
import { useQuery } from '@apollo/client';
import InfiniteScroll from 'react-infinite-scroller';
import { PokemonContext } from 'App'
import { Layout, Header, Logo, LoadingIndicator } from 'components'
import { CardPokemon } from './components'
import { GET_POKEMON } from 'services/graphql/query'

const PokemonList = () => {
  const myPokemon = useContext(PokemonContext)

  const {loading, error, data, fetchMore} = useQuery(GET_POKEMON, {
    variables: { limit: 50, offset: 0 }
  })

  const loadMore = () => {
    fetchMore({
      variables: {
        offset: data.pokemons.length
      }
    })
  }

  if (loading) return <p>Loading...</p>
  
  if (error) return <p>Error</p>

  return (
    <>
      <Header>
        <Logo />
      </Header>
      <Layout>
        <InfiniteScroll
          pageStart={1}
          loadMore={loadMore}
          hasMore={data.pokemons.length < data.aggregate.aggregate.count}
          loader={<LoadingIndicator key={0} />}
          initialLoad={false}
        >
          {data.pokemons.map((v: any, i: number) => 
            <React.Fragment key={v.id}>
              <CardPokemon
                name={v.name}
                ownedTotal={myPokemon.myPokemon.pokemonTotal[v.id]}/>
              { i < data.pokemons.length && i !== data.pokemons.length - 1 && <hr /> }
            </React.Fragment>
          )}
        </InfiniteScroll>
      </Layout>
    </>
  )
};

export default PokemonList;